import AdminPageContainer from "../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import {Data} from "./+data";
import {useData} from "vike-react/useData";
import AdminEditorSection from "../../../../components/Admin/AdminEditor/AdminEditorSection";
import AdminEditorItem from "../../../../components/Admin/AdminEditor/AdminEditorItem";
import Input from "../../../../components/Input/Input";
import {useForm} from "react-hook-form";
import Button from "../../../../components/Button/Button";


const Page = () => {
    const data = useData<Data>()

    interface Inputs {
        siteName: string,
        siteUrl: string
        isPublished: boolean
    }


    const {register, handleSubmit} = useForm<Inputs>()

    return (
        <AdminPageContainer title={'Настройки'}>
            <form onSubmit={handleSubmit(data => console.log(data))}>
                <AdminEditorSection>
                    <AdminEditorItem label={'Название компании'}>
                        <Input type="text" defaultValue={data.companyName} disabled/>
                    </AdminEditorItem>
                    <AdminEditorItem label={'Email'}>
                        <Input type="text" defaultValue={data.email} disabled/>
                    </AdminEditorItem>
                    <AdminEditorItem label={'Название сайта'}>
                        <Input type="text" defaultValue={data.siteName} {...register('siteName')}/>
                    </AdminEditorItem>
                    <AdminEditorItem label={'Адрес сайта'}>
                        <Input type="text" defaultValue={data.siteUrl}/>
                    </AdminEditorItem>
                    <AdminEditorItem label={'Публиковать сайт'}>
                        <Input type="checkbox" defaultChecked={data.isPublished} {...register('isPublished')}/>
                    </AdminEditorItem>
                </AdminEditorSection>
                <Button>Сохранить</Button>
            </form>
        </AdminPageContainer>
    );
};

export default Page;
