import AdminPageContainer from "../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import Input from "../../../../components/Input/Input";
import Select from "../../../../components/Select/Select";
import AdminEditorSection from "../../../../components/Admin/AdminEditor/AdminEditorSection";
import AdminEditorItem from "../../../../components/Admin/AdminEditor/AdminEditorItem";
import { useData } from "vike-react/useData";
import { Data } from "./+data";
import Button from "../../../../components/Button/Button";
import { useState } from "react";
import {IColorStyles, ISiteStyles} from "../../../../types/types";
import { useInlineCustomCss } from "../../../../hooks/useInlineCustomCss";
import UserButton from "../../../../components/User/UserButton/UserButton";
import {SubmitHandler, useForm, UseFormRegister} from "react-hook-form";
import { usePageContext } from "vike-react/usePageContext";
import { reload } from "vike/client/router";
import { updateSite } from "../../../../api/site";
import { AVAILABLE_FONTS } from "../../../../helpers/const";
import {useGoogleFonts} from "../../../../hooks/useGoogleFonts";
import AdminColorPicker from "../../../../components/Admin/AdminColorPicker/AdminColorPicker";

const Page = () => {
  const data = useData<Data>();
  const context = usePageContext();

  const { register, handleSubmit, watch } = useForm<ISiteStyles>();

  const [styles, setStyles] = useState(data.styles);
  watch((data) => {
    setStyles((prevConfig: ISiteStyles) => ({ ...prevConfig, ...data }));
  });

  const onSubmit: SubmitHandler<ISiteStyles> = (formData) => {
    updateSite(
      {
        siteName: data.siteName,
        styles: formData,
        siteAddress: data.siteAddress,
      },
      context.token,
    ).then(() => {
      reload();
    });
  };

  return (
    <AdminPageContainer title="Оформление">
      <div className="flex justify-center flex-wrap md:flex-nowrap flex-row-reverse">
        <PreviewComponent style={styles} />
        <form className="flex-grow" onSubmit={handleSubmit(onSubmit)}>
          <AdminColorPicker register={register as unknown as UseFormRegister<IColorStyles>} styles={data.styles} />
          <AdminEditorSection title="Шрифты">
            <AdminEditorItem label="Основной">
              <Select
                defaultValue={data.styles.fontFamily}
                {...register("fontFamily")}
              >
                {AVAILABLE_FONTS.map((font) => (
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
                {AVAILABLE_FONTS.map((font) => (
                  <option key={font} value={font}>
                    {font}
                  </option>
                ))}
              </Select>
            </AdminEditorItem>
            <AdminEditorItem label="Размер текста (pt)">
              <Input
                {...register("fontSize")}
                type="number"
                defaultValue={data.styles.fontSize.split("pt")[0]}
              />
            </AdminEditorItem>
            <AdminEditorItem label="Размер заголовков (pt)">
              <Input
                {...register("fontSizeHeaders")}
                type="number"
                defaultValue={data.styles.fontSizeHeaders.split("pt")[0]}
              />
            </AdminEditorItem>
            <AdminEditorItem label="Радиус скругления (px)">
              <Input
                {...register("borderRadius")}
                type="number"
                defaultValue={(data.styles.borderRadius ?? "0px").split("px")[0]}
              />
            </AdminEditorItem>
          </AdminEditorSection>
          <div className="my-3">
            <Button>Сохранить</Button>
          </div>
        </form>
      </div>
    </AdminPageContainer>
  );
};

const PreviewComponent = ({ style }: { style: ISiteStyles }) => {
  useGoogleFonts([style.fontFamily, style.fontFamilyHeaders])
  return (
    <div
      style={useInlineCustomCss(style)}
      className="flex flex-col p-3 justify-center flex-wrap bg-user-background h-fit"
    >
      <div className="font-display text-user-big">Выставка</div>
      <p className="font-sans text-user-small">Приходите на нашу выставку!</p>
      <UserButton>Подробнее</UserButton>
    </div>
  );
};

export default Page;
