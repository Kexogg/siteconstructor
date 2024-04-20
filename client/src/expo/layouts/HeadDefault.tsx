import logoUrl from "../assets/logo.svg";
import {usePageContext} from "vike-react/usePageContext";
import {PageConfig} from "../types";

export default function HeadDefault() {
    const context = usePageContext()
    return (
        <>
            <title>{(context.data as PageConfig).title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content={(context.data as PageConfig).description}/>
            <link rel="icon" href={logoUrl}/>
        </>
    );
}
