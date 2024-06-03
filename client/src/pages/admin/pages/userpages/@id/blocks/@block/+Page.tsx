import AdminPageContainer from "../../../../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import {useData} from "vike-react/useData";
import {Data} from "./+data";
import {forwardRef, useState} from "react";
import AdminEditorSection from "../../../../../../../components/Admin/AdminEditor/AdminEditorSection";
import Input from "../../../../../../../components/Input/Input";
import AdminEditorItem from "../../../../../../../components/Admin/AdminEditor/AdminEditorItem";
import Button from "../../../../../../../components/Button/Button";
import Select from "../../../../../../../components/Select/Select";
import {BlockType} from "../../../../../../../types/blocks";
import {generateBlockStub} from "../../../../../../../helpers/generateBlockStub";

const Page = () => {
    const data = useData<Data>()
    const [block, setBlock] = useState(data.block)
    console.log(block)
    const blockTypes = Object.values(BlockType)
    return (
        <AdminPageContainer title={`Редактирование блока`}>
            <AdminEditorSection>
                <AdminEditorItem label={'ID'}>
                    <Input disabled value={block.id}/>
                </AdminEditorItem>
                <AdminEditorItem label={'Порядок'}>
                    <Input value={block.num}/>
                </AdminEditorItem>
                <AdminEditorItem label={'Тип'}>
                    <Select value={block.type} onChange={(v) =>
                        setBlock({...block, type: v.target.value as BlockType, jsonb: generateBlockStub(v.target.value as BlockType).jsonb})}>
                        {blockTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </Select>
                </AdminEditorItem>
                {Object.entries(block.jsonb).map(([key, value]) => (
                    <AdminEditorItem label={key} key={key}>
                        <AutoEdit value={value as string | number | boolean | object}
                                  onChange={(v) => setBlock({...block, jsonb: {...block.jsonb, [key]: v}})}/>
                    </AdminEditorItem>
                ))}
            </AdminEditorSection>
            <div className={'flex gap-2'}>
                <Button>Сохранить</Button>
                <Button>Удалить</Button>
            </div>
        </AdminPageContainer>
    );
};


type AutoEditProps = {
    value: string | number | boolean | object;
    onChange: (value: string | number | boolean | object) => void;
}

const AutoEdit = forwardRef<HTMLInputElement, AutoEditProps>(({value, onChange}, ref) => {
    if (typeof value === 'string') {
        return <Input type="text" ref={ref} value={value} onChange={(e) => onChange(e.target.value)}/>
    }
    if (typeof value === 'number') {
        return <Input type="number" ref={ref} value={value} onChange={(e) => onChange(Number(e.target.value))}/>
    }
    if (typeof value === 'boolean') {
        return <Input type="checkbox" ref={ref} checked={value} onChange={(e) => onChange(e.target.checked)}/>
    }
    return <pre>{JSON.stringify(value)}</pre>
})
AutoEdit.displayName = 'AutoEdit';

export default Page;
