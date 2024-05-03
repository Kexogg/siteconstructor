import AdminPageContainer from "../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import AdminTable from "../../../../components/Admin/AdminTable/AdminTable";
import {useData} from "vike-react/useData";
import {Data} from "./+data";
import {navigate} from "vike/client/router";
import Button from "../../../../components/Button/Button";

const Page = () => {
    const data = useData<Data>()
    //TODO-API
    return (
        <AdminPageContainer title="Страницы">
            <div className={'flex py-3'}>
                <AdminTable data={data} columns={[
                    {key: "title", title: "Название"},
                    {key: "description", title: "Описание"}
                ]} actions={{
                    edit: (id) => {
                        navigate('/admin/userpages/' + id)
                    },
                    delete: (id) => {
                        console.log('Deleting page ' + id)
                    },
                }}/>
            </div>
            <Button onClick={() => console.log('Saving pages')}>Сохранить</Button>
        </AdminPageContainer>
    );
};

export default Page;
