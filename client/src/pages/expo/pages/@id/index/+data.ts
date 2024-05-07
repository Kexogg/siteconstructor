import {PageConfig} from "../../../../../types/types";
import {Block} from "../../../../../types/blocks";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async () => {
    const blocks: Block[] = [
        {
            id: "1",
            type: "text",
            name: "Текст на главной",
            blockData: {
                text: "Hello, world!"
            }
        },
        {
            id: "2",
            type: "hero",
            name: "Основной баннер",
            blockData: {
                header: "Hello world",
                text: "Основной баннер",
                background: "123"
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
