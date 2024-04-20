import "./style.css";
import "./tailwind.css";

export default function LayoutDefault({children,}: Readonly<{ children: React.ReactNode; }>) {
    //TODO: remove styles stub
    const style = {
        "--user-primary-color": "#666",
        "--user-secondary-color": "#666",
        "--user-accent-color": "#666",
        "--user-text-color": "#666",
        "--user-background--color": "#666"
    } as React.CSSProperties
    return (
        <div style={style}>

            <Header data={[{label: 'Home', href: '#'}]}/>
            <Content>{children}</Content>
        </div>
    );
}

function Header({data}: Readonly<{ data: link[] }>) {
    if (!data) return null
    return (
        <header className="text-white h-10 bg-user-secondary flex">
            <div className="flex justify-between items-center px-5">
                {data.map((link) => (
                    <a key={link.label} href={link.href} className="text-white">
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

function Content({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div id="page-container">
            <div id="page-content" className="p-5 pb-12 min-h-screen">
                {children}
            </div>
        </div>
    );
}
