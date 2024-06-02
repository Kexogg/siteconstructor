export enum BlockType {
    Text = 'text',
    Hero = 'hero',
    Speakers = 'speakers',
    IFrame = 'iframe'
}

type BaseBlock = {
    num: string;
    name: string;
}

export type TextBlockProps = BaseBlock & {
    type: BlockType.Text,
    jsonb: {
        text: string
        textSmall: string
    }
}

export type HeroBlockProps = BaseBlock & {
    type: BlockType.Hero,
    jsonb: {
        header: string;
        text: string;
        background: string;
    }
}

export type SpeakersBlockProps = BaseBlock & {
    type: BlockType.Speakers,
    jsonb: {
        speakers: {
            name: string;
            position?: string;
            photo: string;
        }[]
    }
}

export type IFrameBlockProps = BaseBlock & {
    type: BlockType.IFrame,
    jsonb: {
        src: string;
        title: string;
    }
}

export type Block = TextBlockProps | HeroBlockProps | SpeakersBlockProps | IFrameBlockProps;
