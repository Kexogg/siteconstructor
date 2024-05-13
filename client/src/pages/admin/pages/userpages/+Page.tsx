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
            <div className={'flex py-3'}>
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
                }}>
                    <tr>
                        <td colSpan={4}>
                            <button className={'w-full text-2xl text-neutral-500'}>+</button>
                        </td>
                    </tr>
                </AdminTable>
            </div>
            <Button onClick={() => console.log('Saving pages')}>Сохранить</Button>
        </AdminPageContainer>
    );
};

export default Page;
