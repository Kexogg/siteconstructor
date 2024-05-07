import AdminPageContainer from "../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import Input from "../../../../components/Input/Input";
import Select from "../../../../components/Select/Select";
import AdminEditorSection from "../../../../components/Admin/AdminEditor/AdminEditorSection";
import AdminEditorItem from "../../../../components/Admin/AdminEditor/AdminEditorItem";
import {useData} from "vike-react/useData";
import {Data} from "./+data";
import Button from "../../../../components/Button/Button";
import {useState} from "react";
import {CssConfig} from "../../../../types/types";
import {useInlineCustomCss} from "../../../../hooks/useInlineCustomCss";
import UserButton from "../../../../components/User/UserButton/UserButton";

const Page = () => {
    const data = useData<Data>()
    const availableFonts = ["Roboto", "Open Sans", "Montserrat"];
    const [cssConfig, setCssConfig] = useState(useData<Data>())

    const updateCss = (key: keyof CssConfig, value: string) => {
        setCssConfig({...cssConfig, [key]: value})
        console.log({...cssConfig, [key]: value})
    }

    return (
        <AdminPageContainer title="Оформление">
            <div className="flex justify-center flex-wrap flex-row-reverse">
                <PreviewComponent style={cssConfig}/>
                <div className="flex-grow">
                    <AdminEditorSection title="Цвета">
                        <ColorPicker label={'Основной'} defaultValue={data.primaryColor}
                                     onChange={(v) => updateCss("primaryColor", v)}/>
                        <ColorPicker label={'Вторичный'} defaultValue={data.secondaryColor}
                                     onChange={(v) => updateCss("secondaryColor", v)}/>
                        <ColorPicker label={'Акцент'} defaultValue={data.accentColor}
                                     onChange={(v) => updateCss("accentColor", v)}/>
                        <ColorPicker label={'Фон'} defaultValue={data.backgroundColor}
                                     onChange={(v) => updateCss("backgroundColor", v)}/>
                        <ColorPicker label={'Текст'} defaultValue={data.textColor}
                                     onChange={(v) => updateCss("textColor", v)}/>
                    </AdminEditorSection>
                    <AdminEditorSection title="Шрифты">
                        <AdminEditorItem label="Основной">
                            <Select defaultValue={data.fontFamily}
                                    onChange={(e) => updateCss("fontFamily", e.target.value)}>
                                {availableFonts.map(font => <option key={font} value={font}>{font}</option>)}
                            </Select>
                        </AdminEditorItem>
                        <AdminEditorItem label="Заголовки">
                            <Select defaultValue={data.fontFamilyHeaders}
                                    onChange={(e) => updateCss("fontFamilyHeaders", e.target.value)}>
                                {availableFonts.map(font => <option key={font} value={font}>{font}</option>)}
                            </Select>
                        </AdminEditorItem>
                        <AdminEditorItem label="Размер текста">
                            <Input type="number" onChange={(e) => updateCss("fontSize", e.target.value)}
                                   defaultValue={data.fontSize.split("pt")[0]}/>
                        </AdminEditorItem>
                        <AdminEditorItem label="Размер заголовков">
                            <Input type="number" defaultValue={data.fontSizeHeaders.split("pt")[0]}/>
                        </AdminEditorItem>
                    </AdminEditorSection>
                    <AdminEditorSection title="Другие стили">
                        <AdminEditorItem label="Размер заголовков"><Input type="number"
                                                                          defaultValue="24"/></AdminEditorItem>
                        <AdminEditorItem label="Размер кнопок"><Input type="number"
                                                                      defaultValue="24"/></AdminEditorItem>
                        <AdminEditorItem label="Скургление углов">
                            <Input type="number" defaultValue={data.borderRadius.split("px")[0]}/>
                        </AdminEditorItem>

                    </AdminEditorSection>
                    <div className="my-3">
                        <Button>Сохранить</Button>
                    </div>
                </div>
            </div>
        </AdminPageContainer>
    );
};

const ColorPicker = ({label, defaultValue, onChange}: {
    label: string,
    defaultValue: string,
    onChange: (value: string) => void
}) => {
    return (
        <AdminEditorItem label={label}>
            <Input type="color" onChange={(e) => onChange(e.target.value)} defaultValue={defaultValue}/>
        </AdminEditorItem>
    );
}

const PreviewComponent = ({style}: { style: CssConfig }) => {
    return (
        <div style={useInlineCustomCss(style)}
             className="flex flex-col p-3 justify-center flex-wrap bg-user-background h-fit">
            <div className="font-user-headers">Выставка</div>
            <p className="font-user">Приходите на нашу выставку!</p>
            <UserButton>Подробнее</UserButton>
        </div>
    );
}

export default Page;
