import "./tailwind.css";
import { ReactNode } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { useInlineCustomCss } from "../../../hooks/useInlineCustomCss";
import {ExpoHeader} from "../../../components/Expo/ExpoHeader/ExpoHeader";

export default function LayoutDefault({
  children,
}: Readonly<{ children: ReactNode }>) {
  const context = usePageContext();
  return (
    <div style={useInlineCustomCss(context.site.styles)}>
      <ExpoHeader site={context.site} />
      <Content>{children}</Content>
    </div>
  );
}




function Content({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div id="page-container">
      <div id="page-content">{children}</div>
    </div>
  );
}
