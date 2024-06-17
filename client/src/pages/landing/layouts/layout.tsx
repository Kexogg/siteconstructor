import "./tailwind.css";
import {ReactNode} from "react";

export default function Layout({
                                          children,
                                      }: Readonly<{ children: ReactNode }>) {
    return (
        <main>
            <Content>{children}</Content>
        </main>
    );
}


function Content({children}: Readonly<{ children: ReactNode }>) {
    return (
        <div id="page-container">
            <div id="page-content">{children}</div>
        </div>
    );
}
