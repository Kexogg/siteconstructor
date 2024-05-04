import type { PageContextServer } from 'vike/types'
import {UserPage} from "../../../../../types/types";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
    //TODO-API: request page data here
    const page: UserPage = {
        id: pageContext.routeParams.id,
        title: "Главная",
        description: "Главная страница",
        blocks: [
            {
                id: "1",
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
    return page
}
