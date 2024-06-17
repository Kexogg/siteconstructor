import {usePageContext} from "vike-react/usePageContext";
import {ISiteUserData} from "../../../types/types";


type link = {
    name: string;
    address: string;
};

function HeaderLink(props: Readonly<{ link: link }>) {
    const context = usePageContext();
    const { urlPathname } = context;
    const siteAddress = context.routeParams.siteId;
    const fullLink = `/expo/${siteAddress}/${props.link.address}`;
    const isActive = urlPathname === fullLink;
    return (
        <a
            href={fullLink}
            className={`transition-colors text-neutral-900 h-full flex items-center hover:bg-user-accent px-3 ${isActive ? "bg-user-accent" : ""}`}
        >
            {props.link.name}
        </a>
    );
}

export const ExpoHeader = (props: Readonly<{ site: ISiteUserData }>) => {
    return (
        <header className="text-white h-10 bg-user-background flex px-2">
            <h1 className={"text-lg m-0 my-auto block"}>{props.site.siteName}</h1>
            <div className="flex justify-between items-center px-5 h-full">
                {props.site.pages.map((link) => (
                    <HeaderLink key={link.name} link={link} />
                ))}
            </div>
        </header>
    );
}
