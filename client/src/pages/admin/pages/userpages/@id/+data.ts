import type {PageContextServer} from 'vike/types'
import {UserPage} from "../../../../../types/types";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
    const response = await fetch('https://nyashdev-siteconstructor.stk8s.66bit.ru/api/site/page/' + pageContext.routeParams.id,
        {
            headers: {
                'Authorization': 'Bearer ' + pageContext.token,
            }
        })
    return await response.json();
/*
    const page: UserPage = {
        id: pageContext.routeParams.id,
        title: "Главная",
        description: "Главная страница",
        blocks: [
            {
                id: "1",
                name: "Text",
                type: "text",
                blockData: {
                    text: "Hello, world!"
                }
            }
        ],
        published: true,
        index: 0,
        pageUrl: "/"
    }
    return page*/
}
