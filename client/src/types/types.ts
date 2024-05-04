export type WithId<T> = T & { id: string };

/**
 * Represents a user page with its properties.
 * @property {string} id - The unique identifier of the page.
 * @property {string} pageUrl - The relative URL of the page.
 * @property {string} title - The title of the page.
 * @property {string} description - The description of the page.
 * @property {Block[]} blocks - The blocks that make up the page.
 */
export type UserPage = {
    id: string;
    pageUrl: string;
    title: string;
    description: string;
    blocks: Block[];
    published: boolean;
    index: number;
}

export type BlockData = {
    text: string
}

export type Block = {
    id: string;
    type: string;
    name: string;
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

