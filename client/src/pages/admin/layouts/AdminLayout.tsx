import {ReactNode, useState} from "react";
import "./tailwind.css";
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
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="w-full bg-primary-950 shadow text-white h-14">
            <div className="container mx-auto p-3 flex items-center gap-5">
                <h1 className="text-2xl font-bold">ExpoBuilder</h1>
                <nav>
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>Меню</button>
                    <ul className={`${menuOpen ? 
                        'flex flex-col w-full top-14 left-0 absolute bg-primary-950/90 backdrop-blur p-3' : 'hidden'} 
                        md:flex gap-3`}>
                        <li>
                            <a onClick={() => setMenuOpen(false)} href={"/admin"}>Главная</a>
                        </li>
                        <li>
                            <a onClick={() => setMenuOpen(false)} href={"/admin/userpages"}>Страницы</a>
                        </li>
                        <li>
                            <a onClick={() => setMenuOpen(false)} href={"/admin/styles"}>Оформление</a>
                        </li>
                        <li>
                            <a onClick={() => setMenuOpen(false)} href={"/admin/finances"}>Финансы</a>
                        </li>
                        <li>
                            <a onClick={() => setMenuOpen(false)} href={"/admin/settings"}>Настройки</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default AdminLayout;
