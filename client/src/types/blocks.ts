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

export type Block = TextBlockProps | HeroBlockProps;
