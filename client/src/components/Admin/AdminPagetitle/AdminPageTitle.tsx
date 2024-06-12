import {ReactNode} from "react";

type AdminPageTitleProps = {
    children: ReactNode;
}

const AdminPageTitle = ({children}: AdminPageTitleProps) => {
    return (
        <div>
            <h1 className="text-text-900 text-2xl font-bold">{children}</h1>
        </div>
    );
};

export default AdminPageTitle;
