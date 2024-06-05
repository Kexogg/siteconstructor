import { IStyles } from "../../types/types";

declare global {
  namespace Vike {
    interface PageContext {
      site: {
        pages: { name: string; address: string }[];
        styles: IStyles;
      };
      routeParams: {
        siteId: string;
      };
    }
  }
}

export {};
