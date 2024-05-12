import {ReactNode} from "react";
import "./tailwind.css";
import {Link} from "../../../components/Link";
import "@fontsource/montserrat";


const AdminLayout = ({children}: Readonly<{ children: ReactNode; }>) => {
    return (
        <div className="bg-primary-50/25 min-h-screen">
            <Header/>
            {children}
        </div>
    );
};

const Header = () => {
    return (
        <header className="w-full bg-primary-950 shadow text-white">
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
                        <li>
                            <Link href={"/admin/settings"}>Настройки</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default AdminLayout;
