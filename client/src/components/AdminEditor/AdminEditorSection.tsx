import {ReactNode} from "react";

type AdminPageEditorSectionProps = {
    children: ReactNode;
    title?: string;
}

const AdminEditorSection = ({children, title}: AdminPageEditorSectionProps) => {
    return (
        <section>
            {title && <h2 className="text-xl font-bold my-3">{title}</h2>}
            <div className="grid-cols-2 grid gap-y-1 w-fit min-w-96">
                {children}
            </div>
        </section>
    );
};

export default AdminEditorSection;
