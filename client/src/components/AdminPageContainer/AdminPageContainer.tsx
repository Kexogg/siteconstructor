import {ReactNode} from "react";

type AdminPageContainerProps = {
    children: ReactNode;
}

const AdminPageContainer = ({children}: AdminPageContainerProps) => {
    return (
        <main className="container mx-auto mt-5">
            {children}
        </main>
    );
};

export default AdminPageContainer;
