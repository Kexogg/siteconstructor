import {PageContextServer} from "vike/types";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
    const response = await fetch('https://nyashdev-siteconstructor.stk8s.66bit.ru/api/site/pages/' + pageContext.routeParams.id + '/block/' + pageContext.routeParams.block,
        {
            headers: {
                'Authorization': 'Bearer ' + pageContext.token,
            }
        })
    return await response.json();
}
