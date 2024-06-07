import { ReactNode } from "react";

type AdminPageEditorItemProps = {
  children: ReactNode;
  label: string;
};
const AdminEditorItem = ({ children, label }: AdminPageEditorItemProps) => {
  return (
    <label className="contents">
      <div className="flex items-center h-8">{label}</div>
      <div>{children}</div>
    </label>
  );
};

export default AdminEditorItem;
