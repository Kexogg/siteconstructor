import AdminPageContainer from "../../../../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import {useData} from "vike-react/useData";
import {Data} from "./+data";
import {useState} from "react";
import AdminEditorSection from "../../../../../../../components/Admin/AdminEditor/AdminEditorSection";
import Input from "../../../../../../../components/Input/Input";
import AdminEditorItem from "../../../../../../../components/Admin/AdminEditor/AdminEditorItem";
import Button from "../../../../../../../components/Button/Button";

const Page = () => {
    const [block, setBlock] = useState(useData<Data>())
    //TODO-API
    return (
        <AdminPageContainer title={`Редактирование блока`}>
            <AdminEditorSection>
                <AdminEditorItem label={'Название'}>
                    <Input value={block.name} onChange={(e) => setBlock({...block, name: e.target.value})}/>
                </AdminEditorItem>
                <AdminEditorItem label={'ID'}>
                    <Input disabled value={block.id}/>
                </AdminEditorItem>
                <AdminEditorItem label={'Тип'}>
                    <Input disabled value={block.type}/>
                </AdminEditorItem>
                {Object.entries(block.blockData).map(([key, value]) => (
                    <AdminEditorItem label={key} key={key}>
                        <AutoEdit value={value}
                                  onChange={(v) => setBlock({...block, blockData: {...block.blockData, [key]: v}})}/>
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

const AutoEdit = ({value, onChange}: AutoEditProps) => {
    if (typeof value === 'string') {
        return <Input type="text" value={value} onChange={(e) => onChange(e.target.value)}/>
    }
    if (typeof value === 'number') {
        return <Input type="number" value={value} onChange={(e) => onChange(Number(e.target.value))}/>
    }
    if (typeof value === 'boolean') {
        return <Input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)}/>
    }
    return <pre>{JSON.stringify(value)}</pre>
}

export default Page;
