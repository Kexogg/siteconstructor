import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import {IStyles} from "../../../types/types";
import AdminEditorSection from "../AdminEditor/AdminEditorSection";
import AdminEditorItem from "../AdminEditor/AdminEditorItem";
import Input from "../../Input/Input";


interface ColorPickerSectionProps {
    register: UseFormRegister<IStyles>;
    styles: IStyles;
}

const AdminColorPicker: React.FC<ColorPickerSectionProps> = ({ register, styles }) => {
    return (
        <AdminEditorSection title="Цвета">
            <AdminEditorItem label={"Основной"}>
                <Input
                    type="color"
                    {...register("primaryColor")}
                    defaultValue={styles.primaryColor}
                />
            </AdminEditorItem>
            <AdminEditorItem label={"Второстепенный"}>
                <Input
                    type="color"
                    {...register("secondaryColor")}
                    defaultValue={styles.secondaryColor}
                />
            </AdminEditorItem>
            <AdminEditorItem label={"Акцент"}>
                <Input
                    type="color"
                    {...register("accentColor")}
                    defaultValue={styles.accentColor}
                />
            </AdminEditorItem>
            <AdminEditorItem label={"Фон"}>
                <Input
                    type="color"
                    {...register("backgroundColor")}
                    defaultValue={styles.backgroundColor}
                />
            </AdminEditorItem>
            <AdminEditorItem label={"Текст"}>
                <Input
                    type="color"
                    {...register("textColor")}
                    defaultValue={styles.textColor}
                />
            </AdminEditorItem>
        </AdminEditorSection>
    );
};

export default AdminColorPicker;
