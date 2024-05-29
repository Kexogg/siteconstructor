type BaseBlock = {
    id: string;
    name: string;
}

export type TextBlockProps = BaseBlock & {
    type: 'text',
    blockData: {
        text: string
        textSmall: string
    }
}

export type HeroBlockProps = BaseBlock & {
    type: 'hero',
    blockData: {
        header: string;
        text: string;
        background: string;
    }
}

export type SpeakersBlockProps = BaseBlock & {
    type: 'speakers',
    blockData: {
        speakers: {
            name: string;
            position?: string;
            photo: string;
        }[]
    }
}

export type IFrameBlockProps = BaseBlock & {
    type: 'iframe',
    blockData: {
        src: string;
        title: string;
    }
}

export type Block = TextBlockProps | HeroBlockProps | SpeakersBlockProps | IFrameBlockProps;
