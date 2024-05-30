import AdminPageContainer from "../../../../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import {useData} from "vike-react/useData";
import {Data} from "./+data";
import {useEffect, useState} from "react";
import AdminEditorSection from "../../../../../../../components/Admin/AdminEditor/AdminEditorSection";
import Input from "../../../../../../../components/Input/Input";
import AdminEditorItem from "../../../../../../../components/Admin/AdminEditor/AdminEditorItem";
import Button from "../../../../../../../components/Button/Button";

const Page = () => {
    const data = useData<Data>()
    const [block, setBlock] = useState({
        ...data.block, jsonb: data.block.jsonb.type ?
            data.block.jsonb : {
                type: "text",
                name: "Текст на главной",
                blockData: {
                    text: "Hello, world!"
                }
            }
    })
    //TODO-API
    useEffect(() => {
        if (!block.jsonb.type) {
            setBlock({
                ...block, jsonb: {
                    id: "1",
                    type: "text",
                    name: "Текст на главной",
                    blockData: {
                        text: "Hello, world!"
                    }
                }
            })
        }
    }, [block])
    console.log(block)
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
                {Object.entries(block.jsonb.blockData).map(([key, value]) => (
                    <AdminEditorItem label={key} key={key}>
                        <AutoEdit value={value as string | number | boolean | object}
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
