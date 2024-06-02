import AdminPageContainer from "../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import {Data} from "./+data";
import {useData} from "vike-react/useData";
import AdminEditorSection from "../../../../components/Admin/AdminEditor/AdminEditorSection";
import AdminEditorItem from "../../../../components/Admin/AdminEditor/AdminEditorItem";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import {navigate} from "vike/client/router";


const Page = () => {
    const data = useData<Data>()
    return (
        <AdminPageContainer title={'Настройки'}>
            <AdminEditorSection>
                <AdminEditorItem label={'Имя'}>
                    <Input disabled value={data.name} onChange={() => {}}/>
                </AdminEditorItem>
                <AdminEditorItem label={'Навзание организации'}>
                    <Input disabled value={data.orgName} onChange={() => {}}/>
                </AdminEditorItem>
                <AdminEditorItem label={'Название сайта'}>
                    <Input disabled value={data.siteName} onChange={() => {}}/>
                </AdminEditorItem>
            </AdminEditorSection>
                <div className={'flex gap-3'}>
                    <Button outline onClick={() => {
                        fetch('/_auth/logout').then(() => navigate('/admin/login'))
                    }}>Выйти</Button>
                </div>
        </AdminPageContainer>
    );
};

export default Page;
