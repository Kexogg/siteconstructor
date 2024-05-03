import {UserPage} from "../../../../types/types";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async () => {
    const pages: UserPage[] = [
        {
            id: "1",
            title: "Главная",
            description: "Главная страница",
            blocks: [],
            pageUrl: "/"
        },
        {
            id: "2",
            title: "О нас",
            description: "Страница о нас",
            blocks: [],
            pageUrl: "/about"
        },
        {
            id: "3",
            title: "Контакты",
            description: "Страница контактов",
            blocks: [],
            pageUrl: "/contacts"
        }
    ]
    return pages;
};
