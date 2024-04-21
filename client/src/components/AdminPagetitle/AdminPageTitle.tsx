type AdminPageTitleProps = {
    children: string;
}

const AdminPageTitle = ({children}: AdminPageTitleProps) => {
    return (
        <div>
            <h1 className="text-text-900 text-2xl font-bold">{children}</h1>
        </div>
    );
};

export default AdminPageTitle;
