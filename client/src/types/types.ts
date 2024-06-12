import { Block } from "./blocks";

export type WithId<T> = T & { id: string };

export interface IPage {
  address: string;
  name: string;
  description: string;
  num: number;
  id: string;
  isEnabled: boolean;
}

export interface IPageDetailedData extends IPage {
  blocks: Block[];
}

export interface ISiteUserData {
  id: string;
  siteAddress: string;
  siteName: string;
  styles: IStyles | null;
  pages: {
    address: string;
    description: string;
    name: string;
    num: number;
  }[];
}

export interface ISiteAdminData extends ISiteUserData {
  pages: (IPage & { isEnabled: boolean, id: string })[];
}

export interface IUserInfo {
  id: number;
  login: string;
  siteAddress: string;
  siteName: string;
  orgName: string;
}


export interface IStyles {
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

