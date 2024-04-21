export type BlockData = {
    text: string
}

export type Block = {
    id: string;
    type: string;
    blockData: BlockData;
}

export type CssConfig = {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundColor: string;
    textColor: string;
    fontSize: string;
    fontFamily: string;
}

export type PageConfig = {
    title: string;
    description: string;
    blocks: Block[];
}
