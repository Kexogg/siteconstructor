import AdminPageContainer from "../../../../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import {useData} from "vike-react/useData";
import {Data} from "./+data";
import {FormEvent, forwardRef, useState} from "react";
import AdminEditorSection from "../../../../../../../components/Admin/AdminEditor/AdminEditorSection";
import Input from "../../../../../../../components/Input/Input";
import AdminEditorItem from "../../../../../../../components/Admin/AdminEditor/AdminEditorItem";
import Button from "../../../../../../../components/Button/Button";
import Select from "../../../../../../../components/Select/Select";
import {Block, BLOCK_FIELDS_RU, BLOCK_TYPES_RU, BlockType} from "../../../../../../../types/blocks";
import {generateBlockStub} from "../../../../../../../helpers/generateBlockStub";
import {usePageContext} from "vike-react/usePageContext";
import {reload} from "vike/client/router";
import {deleteBlock, updateBlock} from "../../../../../../../api/block";
import BaseBlock from "../../../../../../../components/blocks/BaseBlock/BaseBlock";
import AdminPreview from "../../../../../../../components/Admin/AdminPreview/AdminPreview";
import {useInlineCustomCss} from "../../../../../../../hooks/useInlineCustomCss";

const Page = () => {
    const data = useData<Data>();
    const [block, setBlock] = useState<Block>(data.block);
    const blockTypes = Object.values(BlockType);
    const context = usePageContext();
    const update = async (e: FormEvent) => {
        e.preventDefault();
        await updateBlock(
            block.id,
            context.routeParams.id,
            {
                name: block.name,
                isEnabled: block.isEnabled as boolean,
                type: block.type,
                jsonb: JSON.stringify(block.jsonb),
            },
            context.token,
        ).then(reload);
    };

    return (
        <AdminPageContainer title={`Редактирование блока`}>
            <form onSubmit={update}>
                <AdminEditorSection>
                    <AdminEditorItem label={"ID"}>
                        <Input disabled defaultValue={block.id}/>
                    </AdminEditorItem>
                    <AdminEditorItem label={"Название"}>
                        <Input
                            value={block.name}
                            onChange={(e) => setBlock({...block, name: e.target.value})}
                        />
                    </AdminEditorItem>
                    <AdminEditorItem label={"Порядок"}>
                        <Input
                            disabled={true}
                            value={block.num}
                        />
                    </AdminEditorItem>
                    <AdminEditorItem label={"Публиковать"}>
                        <Input
                            type={"checkbox"}
                            checked={block.isEnabled as boolean}
                            onChange={(e) =>
                                setBlock({...block, isEnabled: e.target.checked})
                            }
                        />
                    </AdminEditorItem>
                    <AdminEditorItem label={"Тип"}>
                        <Select
                            value={block.type}
                            onChange={(v) =>
                                setBlock({
                                    ...block,
                                    type: v.target.value as BlockType,
                                    jsonb: generateBlockStub(v.target.value as BlockType).jsonb,
                                } as Block)
                            }
                        >
                            {blockTypes.map((type) => (
                                <option key={type} value={type}>
                                    {BLOCK_TYPES_RU[type] ?? type}
                                </option>
                            ))}
                        </Select>
                    </AdminEditorItem>
                    {Object.entries(block.jsonb).map(([key, value]) => (
                        <AdminEditorItem label={BLOCK_FIELDS_RU[key] ?? key} key={key}>
                            <AutoEdit
                                value={value as string | number | boolean | object}
                                onChange={(v) =>
                                    setBlock({
                                        ...block,
                                        jsonb: {...block.jsonb, [key]: v},
                                    } as Block)
                                }
                            />
                        </AdminEditorItem>
                    ))}
                </AdminEditorSection>
                <div className={"flex gap-2 my-3"}>
                    <Button>Сохранить</Button>
                    <Button outline onClick={() =>
                            deleteBlock(block.id, context.routeParams.id, context.token).then(
                                () => window.history.back(),
                            )
                        }
                    >Удалить</Button>
                </div>
            </form>
            <div className={'my-3'}>
                <AdminPreview title={'Предпросмотр блока'}>
                    <div style={useInlineCustomCss(data.site.styles)}>
                        <BaseBlock block={block}/>
                    </div>
                </AdminPreview>
            </div>
        </AdminPageContainer>
    );
};

type AutoEditProps = {
    value: string | number | boolean | object;
    onChange: (value: string | number | boolean | object) => void;
};

const AutoEdit = forwardRef<HTMLInputElement, AutoEditProps>(
    ({value, onChange}, ref) => {
        if (typeof value === "string") {
            return (
                <Input
                    type="text"
                    ref={ref}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            );
        }
        if (typeof value === "number") {
            return (
                <Input
                    type="number"
                    ref={ref}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                />
            );
        }
        if (typeof value === "boolean") {
            return (
                <Input
                    type="checkbox"
                    ref={ref}
                    checked={value}
                    onChange={(e) => onChange(e.target.checked)}
                />
            );
        }
        return <pre>{JSON.stringify(value)}</pre>;
    },
);
AutoEdit.displayName = "AutoEdit";

export default Page;
