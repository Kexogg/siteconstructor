import "./tailwind.css";
import { ReactNode } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { useInlineCustomCss } from "../../../hooks/useInlineCustomCss";

export default function LayoutDefault({
  children,
}: Readonly<{ children: ReactNode }>) {
  const context = usePageContext();
  return (
    <div style={useInlineCustomCss(context.site.styles)}>
      <Header />
      <Content>{children}</Content>
    </div>
  );
}

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

function Header() {
  const context = usePageContext();
  return (
    <header className="text-white h-10 bg-user-background flex px-2">
      <h1 className={"text-lg m-0 my-auto block"}>{context.site.siteName}</h1>
      <div className="flex justify-between items-center px-5 h-full">
        {context.site.pages.map((link) => (
          <HeaderLink key={link.name} link={link} />
        ))}
      </div>
    </header>
  );
}

type link = {
  name: string;
  address: string;
};

function Content({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div id="page-container">
      <div id="page-content">{children}</div>
    </div>
  );
}
