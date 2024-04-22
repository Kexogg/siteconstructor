import {ReactNode} from "react";
import "./tailwind.css";
import {Link} from "../../../components/Link";

const AdminLayout = ({children}: Readonly<{ children: ReactNode; }>) => {
    return (
        <div className="bg-background-50 min-h-screen">
            <Header/>
            {children}
        </div>
    );
};

const Header = () => {
    return (
        <header className="w-full bg-background-700 text-white">
            <div className="container mx-auto p-3 flex items-center gap-5">
                <h1 className="text-2xl font-bold">ExpoBuilder</h1>
                <nav>
                    <ul className="flex gap-3">
                        <li>
                            <Link href={"/admin"}>Главная</Link>
                        </li>
                        <li>
                            <Link href={"/admin/userpages"}>Страницы</Link>
                        </li>
                        <li>
                            <Link href={"/admin/styles"}>Оформление</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default AdminLayout;
