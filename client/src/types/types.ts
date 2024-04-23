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
    fontSizeHeaders: string;
    fontFamily: string;
    fontFamilyHeaders: string;
    borderRadius: string;
}

export type PageConfig = {
    title: string;
    description: string;
    blocks: Block[];
}
