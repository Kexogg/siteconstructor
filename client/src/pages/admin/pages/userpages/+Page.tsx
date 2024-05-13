import AdminPageContainer from "../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import AdminTable from "../../../../components/Admin/AdminTable/AdminTable";
import {useData} from "vike-react/useData";
import {Data} from "./+data";
import {navigate} from "vike/client/router";
import Button from "../../../../components/Button/Button";
import Dialog from "../../../../components/Dialog/Dialog";
import Input from "../../../../components/Input/Input";
import {useState} from "react";

const Page = () => {
    const data = useData<Data>()
    const [dialogOpen, setDialogOpen] = useState(false)
    return (
        <AdminPageContainer title="Страницы">
            <p>В этом разделе вы можете управлять страницами сайта</p>
            <div className={'flex py-3 flex-col'}>
                <AdminTable data={data} columns={[
                    {key: "index", title: "#", render: (value) => (value as number) + 1, isNarrow: true},
                    {key: "title", title: "Название"},
                    {key: "description", title: "Описание"},
                    {key: "published", title: "Опубликовано", isNarrow: true, render: (value) => value ? 'Да' : 'Нет'},
                ]} actions={{
                    edit: (id) => {
                        navigate('/admin/userpages/' + id)
                    },
                    delete: (id) => {
                        console.log('Deleting page ' + id)
                    },
                }}/>
                <div className='ms-auto mt-3 w-fit'>
                    <span className={'mr-3'}>Количество элементов: {data.length}</span>
                    <Button outline onClick={() => setDialogOpen(true)}>Добавить страницу</Button>
                </div>
            </div>
            <div className={'flex gap-3'}>
                <Button>Сохранить</Button>
                <Button outline>Удалить</Button>
            </div>
            <NewPageDialog open={dialogOpen} onClose={() => setDialogOpen(false)}/>
        </AdminPageContainer>
    );
};

type NewPageDialogProps = {
    open: boolean;
    onClose: () => void;
}

const NewPageDialog = ({open, onClose}: NewPageDialogProps) => {
    return (
        <Dialog open={open} onClose={onClose} title={'Добавить страницу'}>
            <div className={'flex flex-col gap-3'}>
                <Input placeholder={'Название'}/>
                <Input placeholder={'Адрес'}/>
                <Button onClick={() => navigate('/admin/userpages/new')}>Добавить</Button>
            </div>
        </Dialog>
    )
}

export default Page;
