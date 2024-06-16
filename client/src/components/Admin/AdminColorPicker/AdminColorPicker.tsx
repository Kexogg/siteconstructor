import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import {IColorStyles} from "../../../types/types";
import AdminEditorSection from "../AdminEditor/AdminEditorSection";
import AdminEditorItem from "../AdminEditor/AdminEditorItem";
import Input from "../../Input/Input";


interface ColorPickerSectionProps {
    register: UseFormRegister<IColorStyles>;
    styles: IColorStyles;
    prefix?: string;
}

const AdminColorPicker: React.FC<ColorPickerSectionProps> = ({ register, styles, prefix }) => {
    if (!prefix) {
        prefix = '';
    }
    return (
        <AdminEditorSection title="Цвета">
            <AdminEditorItem label={"Основной"}>
                <Input
                    type="color"
                    {...register(`${prefix}primaryColor` as keyof IColorStyles)}
                    defaultValue={styles.primaryColor}
                />
            </AdminEditorItem>
            <AdminEditorItem label={"Второстепенный"}>
                <Input
                    type="color"
                    {...register(`${prefix}secondaryColor` as keyof IColorStyles)}
                    defaultValue={styles.secondaryColor}
                />
            </AdminEditorItem>
            <AdminEditorItem label={"Акцент"}>
                <Input
                    type="color"
                    {...register(`${prefix}accentColor` as keyof IColorStyles)}
                    defaultValue={styles.accentColor}
                />
            </AdminEditorItem>
            <AdminEditorItem label={"Фон"}>
                <Input
                    type="color"
                    {...register(`${prefix}backgroundColor` as keyof IColorStyles)}
                    defaultValue={styles.backgroundColor}
                />
            </AdminEditorItem>
            <AdminEditorItem label={"Текст"}>
                <Input
                    type="color"
                    {...register(`${prefix}textColor` as keyof IColorStyles)}
                    defaultValue={styles.textColor}
                />
            </AdminEditorItem>
        </AdminEditorSection>
    );
};

export default AdminColorPicker;
