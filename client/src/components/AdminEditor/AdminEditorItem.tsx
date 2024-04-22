import {ReactNode} from "react";

type AdminPageEditorItemProps = {
    children: ReactNode;
    label: string;
}
const AdminEditorItem = ({children, label}: AdminPageEditorItemProps) => {
    //FIXME: bad styles on div
    return (
        <label className="contents">
            <div className="flex items-center h-8">{label}</div>
            {children}
        </label>
    );
};

export default AdminEditorItem;
