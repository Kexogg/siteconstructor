import "./tailwind.css";
import {CSSProperties, ReactNode} from "react";
import {usePageContext} from "vike-react/usePageContext";


export default function LayoutDefault({children,}: Readonly<{ children: ReactNode; }>) {
    const context = usePageContext()
    const style = {
        "--user-primary-color": "#666",
        "--user-secondary-color": "#FFF",
        "--user-accent-color": "#ff0000",
        "--user-text-color": "#666",
        "--user-background-color": "#ffe97d"
    } as CSSProperties
    return (
        <div style={style}>
            <Header data={context.site.pages}/>
            <Content>{children}</Content>
        </div>
    );
}

function HeaderLink(props: Readonly<{ link: link }>)
    {
        const context = usePageContext()
        const {urlPathname} = context
        const siteName = context.routeParams.siteId
        const fullLink = `/expo/${siteName}/${props.link.address}`
        const isActive = urlPathname === fullLink
        return <a href={fullLink}
              className={`transition-colors text-neutral-900 h-full flex items-center hover:bg-orange-400 px-3 ${isActive ? 'bg-orange-400' : ''}`}>
        {props.link.name}
    </a>;
}

function Header({data}: Readonly<{ data: link[] }>) {
    if (!data) return null
    return (
        <header className="text-white h-10 bg-user-secondary flex">
            <div className="flex justify-between items-center px-5 h-full">
                {data.map((link) => (
                    <HeaderLink key={link.name} link={link}/>
                ))}
            </div>
        </header>
    );
}

type link = {
    name: string
    address: string
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
