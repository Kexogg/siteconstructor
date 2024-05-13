import AdminPageContainer from "../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import AdminTable from "../../../../components/Admin/AdminTable/AdminTable";
import {useData} from "vike-react/useData";
import {Data} from "./+data";
import {navigate} from "vike/client/router";
import Button from "../../../../components/Button/Button";

const Page = () => {
    const data = useData<Data>()
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
                    <Button outline>Добавить блок</Button>
                </div>
            </div>
            <div className={'flex gap-3'}>
                <Button>Сохранить</Button>
                <Button outline>Удалить</Button>
            </div>
        </AdminPageContainer>
    );
};

export default Page;
