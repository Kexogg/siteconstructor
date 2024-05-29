import {PageConfig} from "../../../../../types/types";
import {Block} from "../../../../../types/blocks";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async () => {
    const blocks: Block[] = [
        {
            id: "2",
            type: "hero",
            name: "Основной баннер",
            blockData: {
                header: "Выставка",
                text: "Основной баннер",
                background: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Plenary_chamber_of_the_Council_of_Europe%27s_Palace_of_Europe_2014_01.JPG"
            }
        },
        {
            id: "1",
            type: "text",
            name: "Текст на главной",
            blockData: {
                text: "Большой текст",
                textSmall: "Маленький текст Маленький текст Маленький текст Маленький текст Маленький текст Маленький текст Маленький текст Маленький текст Маленький текст Маленький текст "
            }
        },
        {
            id: "3",
            type: "speakers",
            name: "Спикеры",
            blockData: {
                speakers: [
                    {
                        name: "Спикер 1",
                        photo: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Plenary_chamber_of_the_Council_of_Europe%27s_Palace_of_Europe_2014_01.JPG"
                    },
                    {
                        name: "Спикер 2",
                        photo: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Plenary_chamber_of_the_Council_of_Europe%27s_Palace_of_Europe_2014_01.JPG"
                    },
                    {
                        name: "Спикер 3",
                        photo: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Plenary_chamber_of_the_Council_of_Europe%27s_Palace_of_Europe_2014_01.JPG"
                    }
                ]
            }
        },
        {
            id: "4",
            type: "iframe",
            name: "Видео",
            blockData: {
                src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                title: "Видео"
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
