import AdminPageContainer from "../../../../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import {useData} from "vike-react/useData";
import {Data} from "./+data";
import {useState} from "react";
import AdminEditorSection from "../../../../../../../components/Admin/AdminEditor/AdminEditorSection";
import Input from "../../../../../../../components/Input/Input";
import AdminEditorItem from "../../../../../../../components/Admin/AdminEditor/AdminEditorItem";
import Button from "../../../../../../../components/Button/Button";
import Select from "../../../../../../../components/Select/Select";
import {Block, BLOCK_FIELDS_RU, BLOCK_TYPES_RU, BlockType} from "../../../../../../../types/blocks";
import {usePageContext} from "vike-react/usePageContext";
import {reload} from "vike/client/router";
import {deleteBlock, updateBlock} from "../../../../../../../api/block";
import BaseBlock from "../../../../../../../components/blocks/BaseBlock/BaseBlock";
import AdminPreview from "../../../../../../../components/Admin/AdminPreview/AdminPreview";
import {useInlineCustomCss} from "../../../../../../../hooks/useInlineCustomCss";
import {FieldValues, useForm, UseFormRegister} from "react-hook-form";
import AdminColorPicker from "../../../../../../../components/Admin/AdminColorPicker/AdminColorPicker";
import {DEFAULT_STYLES} from "../../../../../../../helpers/const";
import {IColorStyles} from "../../../../../../../types/types";


const Page = () => {
    const data = useData<Data>();
    const context = usePageContext();
    const {register, handleSubmit, watch} = useForm<FieldValues>({
        defaultValues: data.block,
    });

    const [preview, setPreview] = useState(data.block);
    watch((formData) => {
        setPreview(formData as Block);
    })

    const onSubmit = async (formData: FieldValues) => {
        await updateBlock(
            formData.id,
            context.routeParams.id,
            {
                name: formData.name,
                isEnabled: formData.isEnabled as boolean,
                type: formData.type,
                jsonb: JSON.stringify(formData.jsonb),
            },
            context.token,
        ).then(reload);
    };

    return (
        <AdminPageContainer title={`Редактирование блока`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <AdminEditorSection>
                    <AdminEditorItem label={"ID"}>
                        <Input disabled {...register("id")}/>
                    </AdminEditorItem>
                    <AdminEditorItem label={"Название"}>
                        <Input {...register("name")}/>
                    </AdminEditorItem>
                    <AdminEditorItem label={"Порядок"}>
                        <Input disabled {...register("num")}/>
                    </AdminEditorItem>
                    <AdminEditorItem label={"Публиковать"}>
                        <Input type={"checkbox"} {...register("isEnabled")}/>
                    </AdminEditorItem>
                    <AdminEditorItem label={"Тип"}>
                        <Select disabled {...register("type")}>
                            {Object.values(BlockType).map((type) => (
                                <option key={type} value={type}>
                                    {BLOCK_TYPES_RU[type] ?? type}
                                </option>
                            ))}
                        </Select>
                    </AdminEditorItem>
                    {Object.entries(data.block.jsonb).map(([key, value]) => {
                        if (key === 'styles') return null;
                        else return (
                            <AdminEditorItem label={BLOCK_FIELDS_RU[key] ?? key} key={key}>
                                <AutoEdit
                                    name={`jsonb.${key}`}
                                    value={value}
                                    register={register}
                                />
                            </AdminEditorItem>
                        )
                    })}
                </AdminEditorSection>
                <AdminColorPicker register={register as unknown as UseFormRegister<IColorStyles>}
                                  prefix={"jsonb.styles."}
                                  styles={data.block.jsonb.styles ?? data.site.styles ?? DEFAULT_STYLES}/>
                <div className={"flex gap-2 my-3"}>
                    <Button type="submit">Сохранить</Button>
                    <Button outline onClick={() =>
                        deleteBlock(data.block.id, context.routeParams.id, context.token).then(
                            () => window.history.back(),
                        )
                    }
                    >Удалить</Button>
                </div>
            </form>
            <div className={'my-3'}>
                <AdminPreview title={'Предпросмотр блока'}>
                    <div style={useInlineCustomCss(data.site.styles)}>
                        <BaseBlock block={preview}/>
                    </div>
                </AdminPreview>
            </div>
        </AdminPageContainer>
    );
};

type AutoEditProps = {
    value: unknown;
    register: ReturnType<typeof useForm>["register"];
    name: string;
};

const AutoEdit = ({value, register, name}: AutoEditProps) => {
    const type = typeof value;
    if (type === "string") {
        return (
            <Input
                type="text"
                {...register(name)}
            />
        );
    }
    if (type === "number") {
        return (
            <Input
                type="number"
                {...register(name)}
            />
        );
    }
    if (type === "boolean") {
        return (
            <Input
                type="checkbox"
                {...register(name)}
            />
        );
    }
    return <pre>{JSON.stringify(value)}</pre>;
}

export default Page;
