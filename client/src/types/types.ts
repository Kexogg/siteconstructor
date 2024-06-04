import { Block } from "./blocks";

export type WithId<T> = T & { id: string };

export interface IPage {
  address: string;
  name: string;
  description: string;
  num: number;
  id: number;
  isEnabled: boolean;
}

export interface IPageData extends IPage {
  blocks: Block[];
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
};

export type PageConfig = {
  title: string;
  description: string;
  blocks: Block[];
};
