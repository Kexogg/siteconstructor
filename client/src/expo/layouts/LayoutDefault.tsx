import "./style.css";
import "./tailwind.css";
import React from "react";

export default function LayoutDefault({children,}: Readonly<{ children: React.ReactNode; }>) {
    //TODO: remove styles stub
    const style = {
        "--primary-color": "#666",
        "--secondary-color": "#666",
        "--accent-color": "#666",
        "--text-color": "#666",
        "--background--color": "#666"
    } as React.CSSProperties
    return (
        <div style={style}>
            <Header>
                Header
            </Header>
            <Content>{children}</Content>
        </div>
    );
}

function Header({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <header className="h-10 text-white">
            <div className="flex bg-secondary justify-between items-center p-5">
                {children}
            </div>
        </header>
    );
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
