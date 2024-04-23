import AdminPageContainer from "../../../../components/AdminPageContainer/AdminPageContainer";
import Input from "../../../../components/Input/Input";
import Select from "../../../../components/Select/Select";
import AdminEditorSection from "../../../../components/AdminEditor/AdminEditorSection";
import AdminEditorItem from "../../../../components/AdminEditor/AdminEditorItem";
import {useData} from "vike-react/useData";
import {Data} from "./+data";
import Button from "../../../../components/Button/Button";
import {CSSProperties} from "react";

const Page = () => {
    const data = useData<Data>()
    const availableFonts = ["Roboto", "Open Sans", "Montserrat"];
    const css = {
        "--user-primary-color": data.primaryColor,
        "--user-secondary-color": data.secondaryColor,
        "--user-accent-color": data.accentColor,
        "--user-text-color": data.textColor,
        "--user-background-color": data.backgroundColor
    } as CSSProperties
    return (
        <AdminPageContainer title="Оформление">
            <div className="flex justify-center flex-wrap flex-row-reverse">
                <PreviewComponent style={css}/>
                <div className="flex-grow">
                    <AdminEditorSection title="Цвета">
                        <AdminEditorItem label="Основной"><Input type="color"
                                                                 defaultValue={data.primaryColor}/></AdminEditorItem>
                        <AdminEditorItem label="Акцент"><Input type="color"
                                                               defaultValue={data.accentColor}/></AdminEditorItem>
                        <AdminEditorItem label="Фон"><Input type="color"
                                                            defaultValue={data.backgroundColor}/></AdminEditorItem>
                        <AdminEditorItem label="Текст"><Input type="color"
                                                              defaultValue={data.secondaryColor}/></AdminEditorItem>
                    </AdminEditorSection>
                    <AdminEditorSection title="Шрифты">
                        <AdminEditorItem label="Основной">
                            <Select defaultValue={data.fontFamily}>
                                {availableFonts.map(font => <option key={font} value={font}>{font}</option>)}
                            </Select>
                        </AdminEditorItem>
                        <AdminEditorItem label="Заголовки">
                            <Select defaultValue={data.fontFamilyHeaders}>
                                {availableFonts.map(font => <option key={font} value={font}>{font}</option>)}
                            </Select>
                        </AdminEditorItem>
                        <AdminEditorItem label="Размер текста">
                            <Input type="number" defaultValue={data.fontSize.split("pt")[0]}/>
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

const PreviewComponent = ({style}: { style: CSSProperties }) => {
    return (
        <div style={style}
             className="flex flex-col p-3 justify-center flex-wrap bg-user-background h-fit">
            <p>Это тестовый компонент</p>
            <button className="bg-user-accent text-user-text">TEST BUTTON</button>
        </div>
    );
}

export default Page;
