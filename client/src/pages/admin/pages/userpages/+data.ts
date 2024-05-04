import {UserPage} from "../../../../types/types";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async () => {
    const pages: UserPage[] = [
        {
            id: "1",
            title: "Главная",
            description: "Главная страница",
            blocks: [],
            pageUrl: "/",
            published: true,
            index: 0
        },
        {
            id: "2",
            title: "О нас",
            description: "Страница о нас",
            blocks: [],
            pageUrl: "/about",
            published: true,
            index: 1
        },
        {
            id: "3",
            title: "Контакты",
            description: "Страница контактов",
            blocks: [],
            pageUrl: "/contacts",
            published: false,
            index: 2
        }
    ]
    return pages;
};
