import {OnBeforeRenderAsync, PageContextServer} from "vike/types";
import {CSSProperties} from "react";

export const onBeforeRender: OnBeforeRenderAsync = async (pageContext: PageContextServer): ReturnType<OnBeforeRenderAsync> => {
    const site = await fetch(`https://nyashdev-siteconstructor.stk8s.66bit.ru/api/site/${pageContext.routeParams.siteId}`)
    const style = {
        "--user-primary-color": "#666",
        "--user-secondary-color": "#FFF",
        "--user-accent-color": "#ff0000",
        "--user-text-color": "#666",
        "--user-background-color": "#ffe97d"
    } as CSSProperties;
    return {
        pageContext: {
            site: {...await site.json()}.site,
            style
        }
    };
}
