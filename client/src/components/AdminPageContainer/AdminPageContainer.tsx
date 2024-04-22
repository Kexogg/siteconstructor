import {ReactNode} from "react";

type AdminPageContainerProps = {
    children?: ReactNode;
    title?: string;
}

const AdminPageContainer = ({children, title}: AdminPageContainerProps) => {
    return (
        <main className="container mx-auto mt-5">
            {title && <h1 className="text-2xl font-bold">{title}</h1>}
            {children}
        </main>
    );
};

export default AdminPageContainer;
