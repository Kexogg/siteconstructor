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
import Select from "../../../../../components/Select/Select";

const Page = () => {
    const data = useData<Data>()
    const [dialogOpen, setDialogOpen] = useState(false)
    return (
        <>
            <AdminPageContainer title={`Страница "${data.title}"`}>
                <pre>ID {data.id}</pre>
                <AdminEditorSection title={'Настройки страницы'}>
                    <AdminEditorItem label={'Название'}>
                        <Input defaultValue={data.title}/>
                    </AdminEditorItem>
                    <AdminEditorItem label={'Описание'}>
                        <Input defaultValue={data.description}/>
                    </AdminEditorItem>
                    <AdminEditorItem label={'Адрес'}>
                        <Input defaultValue={data.pageUrl}/>
                    </AdminEditorItem>
                </AdminEditorSection>
                <h2 className={"text-xl font-bold my-3"}>Блоки</h2>
                <div className={'flex flex-col'}>
                    <AdminTable data={data.blocks} columns={[
                        {key: "id", title: "ID", isNarrow: true},
                        {key: "type", title: "Тип"}
                    ]} actions={{
                        edit: (id) => {
                            navigate('/admin/userpages/' + data.id + '/blocks/' + id)
                        },
                        delete: (id) => {
                            console.log('Deleting block ' + id)
                        },
                    }}/>
                    <div className='ms-auto mt-3 w-fit'>
                        <span className={'mr-3'}>Количество элементов: {data.blocks.length}</span><Button
                        onClick={() => setDialogOpen(true)} outline>Добавить блок</Button>
                    </div>
                </div>
                <div className={'flex gap-3'}>
                    <Button>Сохранить</Button>
                    <Button outline>Удалить</Button>
                </div>
            </AdminPageContainer>
            <NewBlockDialog open={dialogOpen} onClose={() => setDialogOpen(false)}/>
        </>
    );
};

type NewBlockDialogProps = {
    open: boolean;
    onClose: () => void;
}

const NewBlockDialog = ({open, onClose}: NewBlockDialogProps) => {
    return (
        <Dialog open={open} onClose={onClose} title={'Добавить блок'}>
            <div className={'flex flex-col gap-3'}>
                <Input placeholder={'Название'}/>
                <Select>
                    <option>Текст</option>
                    <option>Картинка</option>
                    <option>Кнопка</option>
                </Select>
                <Button onClick={() => navigate('/admin/userpages/TODO/blocks/new')}>Добавить</Button>
            </div>
        </Dialog>
    )
}

export default Page;
