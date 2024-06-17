import {ISiteStyles} from "./types";

export enum BlockType {
    Text = "text",
    Hero = "hero",
    Speakers = "speakers",
    IFrame = "iframe",
    Calendar = "calendar",
    Form = "form",
    Gallery = "gallery",
    Map = "map",
    Partners = "partners",
}

type BaseBlock = {
    num: number;
    name: string;
    type: BlockType;
    isEnabled?: boolean;
    id: string;
    jsonb: Record<string, unknown> & { styles?: ISiteStyles | null };
};

export type TextBlockProps = BaseBlock & {
    type: BlockType.Text;
    jsonb: {
        text: string;
        textSmall: string;
    };
};

export type HeroBlockProps = BaseBlock & {
    type: BlockType.Hero;
    jsonb: {
        header: string;
        text: string;
        background: string;
    };
};

export type SpeakersBlockProps = BaseBlock & {
    type: BlockType.Speakers;
    jsonb: {
        speakers: {
            name: string;
            position?: string;
            photo: string;
        }[];
    };
};

export type IFrameBlockProps = BaseBlock & {
    type: BlockType.IFrame;
    jsonb: {
        src: string;
        title: string;
    };
};

export type Block =
    | TextBlockProps
    | HeroBlockProps
    | SpeakersBlockProps
    | IFrameBlockProps;


export const BLOCK_TYPES_RU: Record<BlockType, string> = {
    [BlockType.Text]: "Текст",
    [BlockType.Hero]: "Герой",
    [BlockType.Speakers]: "Спикеры",
    [BlockType.IFrame]: "IFrame",
    [BlockType.Calendar]: "Календарь",
    [BlockType.Form]: "Форма",
    [BlockType.Gallery]: "Галерея",
    [BlockType.Map]: "Карта",
    [BlockType.Partners]: "Партнеры",
};

export const BLOCK_FIELDS_RU: Record<string, string> = {
    num: "Номер",
    name: "Название",
    type: "Тип",
    isEnabled: "Включен",
    id: "ID",
    jsonb: "JSONB",
    text: "Текст",
    textSmall: "Маленький текст",
    header: "Заголовок",
    background: "Фон",
    speakers: "Спикеры",
    src: "Ссылка",
    title: "Заголовок",
    position: "Должность",
    photo: "Фото",
}
