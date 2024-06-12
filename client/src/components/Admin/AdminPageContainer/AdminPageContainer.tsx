import {ReactNode} from "react";
import AdminPageTitle from "../AdminPagetitle/AdminPageTitle";

type AdminPageContainerProps = {
    children?: ReactNode;
    title?: string;
}

const AdminPageContainer = ({children, title}: AdminPageContainerProps) => {
    return (
        <main className="container mx-auto mt-5 px-3">
            <AdminPageTitle>{title}</AdminPageTitle>
            {children}
        </main>
    );
};

export default AdminPageContainer;
