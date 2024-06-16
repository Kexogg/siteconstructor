import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import {IStyles} from "../../../types/types";
import AdminEditorSection from "../AdminEditor/AdminEditorSection";
import AdminEditorItem from "../AdminEditor/AdminEditorItem";
import Input from "../../Input/Input";


interface ColorPickerSectionProps {
    register: UseFormRegister<any>;
    styles: IStyles;
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
                    {...register(`${prefix}primaryColor`)}
                    defaultValue={styles.primaryColor}
                />
            </AdminEditorItem>
            <AdminEditorItem label={"Второстепенный"}>
                <Input
                    type="color"
                    {...register(`${prefix}secondaryColor`)}
                    defaultValue={styles.secondaryColor}
                />
            </AdminEditorItem>
            <AdminEditorItem label={"Акцент"}>
                <Input
                    type="color"
                    {...register(`${prefix}accentColor`)}
                    defaultValue={styles.accentColor}
                />
            </AdminEditorItem>
            <AdminEditorItem label={"Фон"}>
                <Input
                    type="color"
                    {...register(`${prefix}backgroundColor`)}
                    defaultValue={styles.backgroundColor}
                />
            </AdminEditorItem>
            <AdminEditorItem label={"Текст"}>
                <Input
                    type="color"
                    {...register(`${prefix}textColor`)}
                    defaultValue={styles.textColor}
                />
            </AdminEditorItem>
        </AdminEditorSection>
    );
};

export default AdminColorPicker;
