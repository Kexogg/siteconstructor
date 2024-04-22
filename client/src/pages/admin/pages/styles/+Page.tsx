import AdminPageContainer from "../../../../components/AdminPageContainer/AdminPageContainer";
import AdminPageTitle from "../../../../components/AdminPagetitle/AdminPageTitle";
import Input from "../../../../components/Input/Input";
import Select from "../../../../components/Select/Select";
import AdminEditorSection from "../../../../components/AdminEditor/AdminEditorSection";
import AdminEditorItem from "../../../../components/AdminEditor/AdminEditorItem";

const Page = () => {
    return (
        <AdminPageContainer title="Оформление">
            <AdminEditorSection title="Цвета">
                <AdminEditorItem label="Основной"><Input type="color" defaultValue="#555555"/></AdminEditorItem>
                <AdminEditorItem label="Акцент"><Input type="color" defaultValue="#5F55F5"/></AdminEditorItem>
                <AdminEditorItem label="Фон"><Input type="color" defaultValue="#55F55F"/></AdminEditorItem>
                <AdminEditorItem label="Текст"><Input type="color" defaultValue="#F5555F"/></AdminEditorItem>
            </AdminEditorSection>
            <AdminEditorSection title="Шрифты">
                <AdminEditorItem label="Основной"><Select>
                    <option>Roboto</option>
                    <option>Open Sans</option>
                    <option>Montserrat</option>
                </Select></AdminEditorItem>
                <AdminEditorItem label="Заголовки"><Select>
                    <option>Roboto</option>
                    <option>Open Sans</option>
                    <option>Montserrat</option>
                </Select></AdminEditorItem>
                <AdminEditorItem label="Размер текста"><Input type="number" defaultValue="16"/></AdminEditorItem>
            </AdminEditorSection>
            <AdminEditorSection title="Другие стили">
                <AdminEditorItem label="Размер заголовков"><Input type="number" defaultValue="24"/></AdminEditorItem>
                <AdminEditorItem label="Размер кнопок"><Input type="number" defaultValue="24"/></AdminEditorItem>
                <AdminEditorItem label="Скургление углов"><Input type="number" defaultValue="24"/></AdminEditorItem>
            </AdminEditorSection>
        </AdminPageContainer>
    );
};

export default Page;
