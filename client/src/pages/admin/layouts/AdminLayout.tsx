import {ReactNode, useState} from "react";
import "./tailwind.css";
import "@fontsource/montserrat";
import "@fontsource/roboto";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";


const AdminLayout = ({children}: Readonly<{ children: ReactNode; }>) => {
    return (
        <div className="bg-primary-50/25 min-h-screen pb-3">
            <Header/>
            {children}
        </div>
    );
};

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="w-full bg-primary-950 shadow text-white h-14">
            <div className="container justify-between md:justify-start mx-auto p-3 flex items-center gap-5">
                <h1 className="text-2xl font-bold">ExpoBuilder</h1>
                <nav>
                    <button className="text-2xl md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        <FontAwesomeIcon icon={menuOpen ? fas.faXmark : fas.faBars}/>
                    </button>
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
