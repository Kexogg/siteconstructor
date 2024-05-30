import AdminPageContainer from "../../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import {useData} from "vike-react/useData";
import {Data} from "./+data";
import AdminTable from "../../../../../components/Admin/AdminTable/AdminTable";
import Button from "../../../../../components/Button/Button";
import AdminEditorSection from "../../../../../components/Admin/AdminEditor/AdminEditorSection";
import AdminEditorItem from "../../../../../components/Admin/AdminEditor/AdminEditorItem";
import Input from "../../../../../components/Input/Input";
import {navigate} from "vike/client/router";
import Dialog from "../../../../../components/Dialog/Dialog";
import {useState} from "react";
import {usePageContext} from "vike-react/usePageContext";

const Page = () => {
    const data = useData<Data>()
    const context = usePageContext();
    const addBlock = async (name: string) => {
        const isEnabled = true
        const jsonb = ""
        console.log('Adding block ' + name)
        await fetch('/api/site/pages/' + context.routeParams!.id + '/block',
            {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + context.token,
                },
                body: JSON.stringify({name, isEnabled, jsonb})
            })
    }
    const [dialogOpen, setDialogOpen] = useState(false)
    return (
        <>
            <AdminPageContainer title={`Страница "${data.page.name}"`}>
                <pre>ID {data.id}</pre>
                <AdminEditorSection title={'Настройки страницы'}>
                    <AdminEditorItem label={'Название'}>
                        <Input defaultValue={data.page.name}/>
                    </AdminEditorItem>
                    <AdminEditorItem label={'Порядок'}>
                        <Input defaultValue={data.page.num}/>
                    </AdminEditorItem>
                    <AdminEditorItem label={'Публиковать'}>
                        <Input type='checkbox' defaultValue={data.page.isEnabled}/>
                    </AdminEditorItem>

                </AdminEditorSection>
                <h2 className={"text-xl font-bold my-3"}>Блоки</h2>
                <div className={'flex flex-col'}>
                    <AdminTable data={data.page.blocks} columns={[
                        {key: "id", title: "ID", isNarrow: true},
                        {key: "isEnabled", title: "Публиковать", render: (value) => value ? 'Да' : 'Нет'},
                    ]} actions={{
                        edit: (id) => {
                            navigate('/admin/userpages/' + context.routeParams!.id + '/blocks/' + id)
                        },
                        delete: (id) => {
                            console.log('Deleting block ' + id)
                        },
                    }}/>
                    <div className='ms-auto mt-3 w-fit'>
                        <span className={'mr-3'}>Количество элементов: {data.page.blocks.length}</span><Button
                        onClick={() => setDialogOpen(true)} outline>Добавить блок</Button>
                    </div>
                </div>
                <div className={'flex gap-3'}>
                    <Button>Сохранить</Button>
                    <Button outline>Удалить</Button>
                </div>
            </AdminPageContainer>
            <NewBlockDialog onAdd={addBlock} open={dialogOpen} onClose={() => setDialogOpen(false)}/>
        </>
    );
};

type NewBlockDialogProps = {
    open: boolean;
    onClose: () => void;
    onAdd: (name: string) => void;
}

const NewBlockDialog = ({open, onClose, onAdd}: NewBlockDialogProps) => {
    const [newBlockName, setNewBlockName] = useState('')
    return (
        <Dialog open={open} onClose={onClose} title={'Добавить блок'}>
            <div className={'flex flex-col gap-3'}>
                <Input placeholder={'Название'} onChange={(e) => setNewBlockName(e.target.value)}/>
                <Button onClick={() => {
                    onClose()
                    onAdd(newBlockName)
                }}>Добавить</Button>
            </div>
        </Dialog>
    )
}

export default Page;
