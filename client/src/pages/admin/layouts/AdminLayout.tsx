import {ReactNode, useState} from "react";
import "./tailwind.css";
import "@fontsource/montserrat";
import "@fontsource/roboto";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {usePageContext} from "vike-react/usePageContext";


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
                <a href={'/admin/home'}><h1 className="text-2xl font-bold">ExpoBuilder</h1></a>
                <nav>
                    <button className="text-2xl md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        <FontAwesomeIcon icon={menuOpen ? fas.faXmark : fas.faBars}/>
                    </button>
                    <ul className={`${menuOpen ?
                        'flex-col w-full top-14 left-0 absolute bg-primary-950/90 backdrop-blur gap-3' : 'hidden md:flex'} 
                        md:flex md:gap-0.5 md:w-auto md:top-0 md:left-0 md:relative md:flex-row md:p-0`}>
                        <li>
                            <HeaderLink onClick={() => setMenuOpen(false)} href={"/admin/home"}>Главная</HeaderLink>
                        </li>
                        <li>
                            <HeaderLink onClick={() => setMenuOpen(false)}
                                        href={"/admin/userpages"}>Страницы</HeaderLink>
                        </li>
                        <li>
                            <HeaderLink onClick={() => setMenuOpen(false)}
                                        href={"/admin/styles"}>Оформление</HeaderLink>
                        </li>
                        <li>
                            <HeaderLink onClick={() => setMenuOpen(false)} href={"/admin/finances"}>Финансы</HeaderLink>
                        </li>
                        <li>
                            <HeaderLink onClick={() => setMenuOpen(false)}
                                        href={"/admin/settings"}>Настройки</HeaderLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

const HeaderLink = ({href, children, onClick}: Readonly<{
    href: string;
    children: string | ReactNode;
    onClick?: () => void
}>) => {
    const context = usePageContext()
    const isActive = href === "/" ? context.urlPathname === href : context.urlPathname.startsWith(href);
    return <a onClick={onClick} href={href}
              className={`w-full block md:inline ${isActive ? 'bg-white/80 md:bg-white md:rounded text-primary-950' : ''} p-2`}>{children}</a>
}

export default AdminLayout;
