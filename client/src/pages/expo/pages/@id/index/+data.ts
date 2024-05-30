import {PageConfig} from "../../../../../types/types";
import {Block} from "../../../../../types/blocks";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async () => {
    const response = await fetch('https://nyashdev-siteconstructor.stk8s.66bit.ru/api/site')
    console.log(response)
    const blocks: Block[] = [
        {
            id: "2",
            type: "hero",
            name: "Основной баннер",
            blockData: {
                header: "Выставка ExpoBuild",
                text: "Наша выставка очень интересная - приходите на неё",
                background: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Plenary_chamber_of_the_Council_of_Europe%27s_Palace_of_Europe_2014_01.JPG"
            }
        },
        {
            id: "1",
            type: "text",
            name: "Текст на главной",
            blockData: {
                text: "Анонс дат",
                textSmall: "Мы анонсировали нашу выстаку - она пройдет 3 июля"
            }
        },
        {
            id: "3",
            type: "speakers",
            name: "Спикеры",
            blockData: {
                speakers: [
                    {
                        name: "Иванов И.",
                        position: "Компания А",
                        photo: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                    },
                    {
                        name: "Алексей А.",
                        position: "Комания Б",
                        photo: "https://st2.depositphotos.com/4196725/6216/i/450/depositphotos_62168411-stock-photo-young-cool-black-man-celebratin.jpg"
                    },
                    {
                        name: "Петров П.",
                        position: "Компания В",
                        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDRq2uK8vemZWrys8JcWzTuKGyS1dh-KjBag&s"
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
