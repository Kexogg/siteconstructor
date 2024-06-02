import "./tailwind.css";
import {CSSProperties, ReactNode} from "react";
import {usePageContext} from "vike-react/usePageContext";

export default function LayoutDefault({children,}: Readonly<{ children: React.ReactNode; }>) {
    const context = usePageContext()
    const time = new Date().getTime()


    console.log('Layout render!', time)
    const style = {
        "--user-primary-color": "#666",
        "--user-secondary-color": "#FFF",
        "--user-accent-color": "#ff0000",
        "--user-text-color": "#666",
        "--user-background-color": "#ffe97d"
    } as CSSProperties
    return (
        <div style={style}>
            <Header data={[{label: 'Главная', href: `/expo/${context.routeParams!.siteId}`},{label: 'О нас', href: `/expo/${context.routeParams!.siteId}/about`},{label: 'Контакты', href: '#'}]}/>
            <Content>{children}</Content>
        </div>
    );
}

function Header({data}: Readonly<{ data: link[] }>) {
    if (!data) return null
    return (
        <header className="text-white h-10 bg-user-secondary flex">
            <div className="flex justify-between items-center px-5 h-full">
                {data.map((link) => (
                    <a key={link.label} href={link.href} className="transition-colors text-neutral-900 h-full flex items-center hover:bg-orange-400 px-3">
                        {link.label}
                    </a>
                ))}
            </div>
        </header>
    );
}

type link = {
    label: string
    href: string
}

function Content({children}: Readonly<{ children: ReactNode }>) {
    return (
        <div id="page-container">
            <div id="page-content" className="min-h-screen">
                {children}
            </div>
        </div>
    );
}
