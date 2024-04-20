import {Block, PageConfig} from "../../../types";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async () => {
    //Todo: remove mock data
    const blocks: Block[] = [
        {
            id: "1",
            type: "text",
            blockData: {
                text: "Главная страница сайта выставки"
            }
        }
    ]
    const pageConfig: PageConfig = {
        blocks,
        title: "Главная страница",
        description: "Главная страница сайта выставки",
    }
    return pageConfig;
};
