import type {PageContextServer} from "vike/types";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
    const pageId = pageContext.routeParams['*'] !== '' ? pageContext.routeParams['*'] : 'index'
    const response = await fetch(`https://nyashdev-siteconstructor.stk8s.66bit.ru/api/site/${pageContext.routeParams.siteId}/page/${pageId}`)
    console.log(response)
    return await response.json();
};
