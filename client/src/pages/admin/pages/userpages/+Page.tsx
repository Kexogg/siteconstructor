import AdminPageContainer from "../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import AdminTable from "../../../../components/Admin/AdminTable/AdminTable";
import {useData} from "vike-react/useData";
import {Data} from "./+data";
import {navigate, reload} from "vike/client/router";
import Button from "../../../../components/Button/Button";
import Dialog from "../../../../components/Dialog/Dialog";
import Input from "../../../../components/Input/Input";
import {useState} from "react";
import {usePageContext} from "vike-react/usePageContext";

const Page = () => {
    const data = useData<Data>()
    const context = usePageContext();
    const [dialogOpen, setDialogOpen] = useState(false)
    const createPage = async (title: string) => {
        await fetch('/api/site/page',
            {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + context.token,
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: `"${title}"`
            })
        await reload()
    }
    const deletePage = async (id: string) => {
        await fetch('/api/site/page/' + id,
            {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + context.token,
                }
            })
        await reload()
    }
    return (
        <AdminPageContainer title="Страницы">
            <p>В этом разделе вы можете управлять страницами сайта</p>
            <div className={'flex py-3 flex-col'}>
                <AdminTable data={data.site.pages} columns={[
                    {key: "num", title: "Позиция", isNarrow: true},
                    {key: "name", title: "Название"},
                    {key: "isEnabled", title: "Опубликовано", isNarrow: true, render: (value) => value ? 'Да' : 'Нет'},
                ]} actions={{
                    edit: (id) => {
                        navigate('/admin/userpages/' + id)
                    },
                    delete: (id) => {
                        deletePage(id)
                    },
                }}/>
                <div className='ms-auto mt-3 w-fit'>
                    <span className={'mr-3'}>Количество элементов: {data.site.pages.length}</span>
                    <Button outline onClick={() => setDialogOpen(true)}>Добавить страницу</Button>
                </div>
            </div>
            <NewPageDialog onAdd={createPage} open={dialogOpen} onClose={() => setDialogOpen(false)}/>
        </AdminPageContainer>
    );
};

type NewPageDialogProps = {
    open: boolean;
    onClose: () => void;
    onAdd: (title: string) => void;
}

const NewPageDialog = ({open, onClose, onAdd}: NewPageDialogProps) => {
    const [newPageTitle, setNewPageTitle] = useState('')
    return (
        <Dialog open={open} onClose={onClose} title={'Добавить страницу'}>
            <div className={'flex flex-col gap-3'}>
                <Input placeholder={'Название'} onChange={(e) => setNewPageTitle(e.target.value)}/>
                <Button onClick={() => {
                    onClose()
                    onAdd(newPageTitle)
                }}>Добавить</Button>
            </div>
        </Dialog>
    )
}

export default Page;
