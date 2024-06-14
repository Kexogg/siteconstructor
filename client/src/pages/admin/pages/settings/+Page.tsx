import AdminPageContainer from "../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import {Data} from "./+data";
import {useData} from "vike-react/useData";
import AdminEditorSection from "../../../../components/Admin/AdminEditor/AdminEditorSection";
import AdminEditorItem from "../../../../components/Admin/AdminEditor/AdminEditorItem";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import {navigate} from "vike/client/router";
import {deleteUser, userLogout} from "../../../../api/user";
import {usePageContext} from "vike-react/usePageContext";
import {SubmitHandler, useForm} from "react-hook-form";

const Page = () => {
    const data = useData<Data>();
    const context = usePageContext();
    interface FormData {
        login: string;
        orgName: string;
        siteName: string;
        siteAddress: string;
    }
    const {register, handleSubmit} = useForm<FormData>({values: data});

    const onSubmit: SubmitHandler<FormData> = async (formData: FormData) => {
        //TODO
        console.log(formData);
    }

    return (
        <AdminPageContainer title={"Настройки"}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <AdminEditorSection>
                <AdminEditorItem label={"Email"}>
                    <Input disabled {...register('login')} onChange={() => {
                    }}/>
                </AdminEditorItem>
                <AdminEditorItem label={"Навзание организации"}>
                    <Input {...register('orgName')} onChange={() => {
                    }}/>
                </AdminEditorItem>
                <AdminEditorItem label={"Название сайта"}>
                    <Input {...register('siteName')}/>
                </AdminEditorItem>
                <AdminEditorItem label={"Адрес сайта"}>
                    <Input {...register('siteAddress')}/>
                </AdminEditorItem>
            </AdminEditorSection>
            <div className={"flex gap-3 mt-3"}>
                <Button>
                    Сохранить
                </Button>
                <Button
                    outline
                    onClick={() => {
                        userLogout().then(() => navigate("/admin/login"));
                    }}
                >
                    Выйти
                </Button>
                <Button
                    outline
                    onClick={() =>
                        deleteUser(context.token).then(() => navigate("/admin/login"))
                    }
                >
                    Удалить аккаунт
                </Button>
            </div>
            </form>
        </AdminPageContainer>
    );
};

export default Page;
