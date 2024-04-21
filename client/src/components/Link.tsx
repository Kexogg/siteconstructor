import { usePageContext } from "vike-react/usePageContext";
import {ReactNode} from "react";

export function Link({ href, children }: Readonly<{ href: string; children: string | ReactNode }>) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  return (
    <a href={href} className={isActive ? "is-active" : undefined}>
      {children}
    </a>
  );
}
