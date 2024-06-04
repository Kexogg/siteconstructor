import AdminPageContainer from "../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import Input from "../../../../components/Input/Input";
import Select from "../../../../components/Select/Select";
import AdminEditorSection from "../../../../components/Admin/AdminEditor/AdminEditorSection";
import AdminEditorItem from "../../../../components/Admin/AdminEditor/AdminEditorItem";
import { useData } from "vike-react/useData";
import { Data } from "./+data";
import Button from "../../../../components/Button/Button";
import { useState } from "react";
import { CssConfig } from "../../../../types/types";
import { useInlineCustomCss } from "../../../../hooks/useInlineCustomCss";
import UserButton from "../../../../components/User/UserButton/UserButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { updateSite } from "../../../../helpers/api";
import { usePageContext } from "vike-react/usePageContext";
import { reload } from "vike/client/router";

const Page = () => {
  const data = useData<Data>();
  console.log(data);
  const context = usePageContext();
  const availableFonts = ["Roboto", "Open Sans", "Montserrat"];
  const [cssConfig, setCssConfig] = useState(data.styles);

  interface Inputs {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundColor: string;
    textColor: string;
    fontSize: string;
    fontSizeHeaders: string;
    fontFamily: string;
    fontFamilyHeaders: string;
    borderRadius: string;
  }

  const { register, handleSubmit, watch } = useForm<Inputs>();

  watch((data) => {
    setCssConfig((prevConfig: CssConfig) => ({ ...prevConfig, ...data }));
  });

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    updateSite(
      { siteName: data.siteName, styles: formData },
      context.token,
    ).then(() => {
      reload();
    });
  };

  return (
    <AdminPageContainer title="Оформление">
      <div className="flex justify-center flex-wrap md:flex-nowrap flex-row-reverse">
        <PreviewComponent style={cssConfig} />
        <form className="flex-grow" onSubmit={handleSubmit(onSubmit)}>
          <AdminEditorSection title="Цвета">
            <AdminEditorItem label={"Основной"}>
              <Input
                type="color"
                {...register("primaryColor")}
                defaultValue={data.styles.primaryColor}
              />
            </AdminEditorItem>
            <AdminEditorItem label={"Второстепенный"}>
              <Input
                type="color"
                {...register("secondaryColor")}
                defaultValue={data.styles.secondaryColor}
              />
            </AdminEditorItem>
            <AdminEditorItem label={"Акцент"}>
              <Input
                type="color"
                {...register("accentColor")}
                defaultValue={data.styles.accentColor}
              />
            </AdminEditorItem>
            <AdminEditorItem label={"Фон"}>
              <Input
                type="color"
                {...register("backgroundColor")}
                defaultValue={data.styles.backgroundColor}
              />
            </AdminEditorItem>
            <AdminEditorItem label={"Текст"}>
              <Input
                type="color"
                {...register("textColor")}
                defaultValue={data.styles.textColor}
              />
            </AdminEditorItem>
          </AdminEditorSection>
          <AdminEditorSection title="Шрифты">
            <AdminEditorItem label="Основной">
              <Select
                defaultValue={data.styles.fontFamily}
                {...register("fontFamily")}
              >
                {availableFonts.map((font) => (
                  <option key={font} value={font}>
                    {font}
                  </option>
                ))}
              </Select>
            </AdminEditorItem>
            <AdminEditorItem label="Заголовки">
              <Select
                defaultValue={data.styles.fontFamilyHeaders}
                {...register("fontFamilyHeaders")}
              >
                {availableFonts.map((font) => (
                  <option key={font} value={font}>
                    {font}
                  </option>
                ))}
              </Select>
            </AdminEditorItem>
            <AdminEditorItem label="Размер текста">
              <Input
                {...register("fontSize")}
                type="number"
                defaultValue={data.styles.fontSize.split("pt")[0]}
              />
            </AdminEditorItem>
            <AdminEditorItem label="Размер заголовков">
              <Input
                {...register("fontSizeHeaders")}
                type="number"
                defaultValue={data.styles.fontSizeHeaders.split("pt")[0]}
              />
            </AdminEditorItem>
          </AdminEditorSection>
          {/*<AdminEditorSection title="Другие стили">
                        <AdminEditorItem label="Размер заголовков"><Input type="number"
                                                                          defaultValue="24"/></AdminEditorItem>
                        <AdminEditorItem label="Размер кнопок"><Input type="number"
                                                                      defaultValue="24"/></AdminEditorItem>
                        <AdminEditorItem label="Скургление углов">
                            <Input type="number" defaultValue={data.borderRadius.split("px")[0]}/>
                        </AdminEditorItem>
                    </AdminEditorSection>*/}
          <div className="my-3">
            <Button>Сохранить</Button>
          </div>
        </form>
      </div>
    </AdminPageContainer>
  );
};

const PreviewComponent = ({ style }: { style: CssConfig }) => {
  return (
    <div
      style={useInlineCustomCss(style)}
      className="flex flex-col p-3 justify-center flex-wrap bg-user-background h-fit"
    >
      <div className="font-user-headers">Выставка</div>
      <p className="font-user">Приходите на нашу выставку!</p>
      <UserButton>Подробнее</UserButton>
    </div>
  );
};

export default Page;
