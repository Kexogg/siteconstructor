import AdminPageContainer from "../../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import {useData} from "vike-react/useData";
import {Data} from "./+data";
import AdminTable from "../../../../../components/Admin/AdminTable/AdminTable";
import Button from "../../../../../components/Button/Button";
import AdminEditorSection from "../../../../../components/Admin/AdminEditor/AdminEditorSection";
import AdminEditorItem from "../../../../../components/Admin/AdminEditor/AdminEditorItem";
import Input from "../../../../../components/Input/Input";
import {navigate} from "vike/client/router";

const Page = () => {
    const data = useData<Data>()
    return (
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
            <div className={'flex py-3'}>
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
            </div>

            <Button>Сохранить</Button>
        </AdminPageContainer>
    );
};

export default Page;
