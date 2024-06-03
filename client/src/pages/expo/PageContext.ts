import { CssConfig } from "../../types/types";

declare global {
  namespace Vike {
    interface PageContext {
      site: {
        pages: { name: string; address: string }[];
        styles: CssConfig;
      };
      routeParams: {
        siteId: string;
      };
    }
  }
}

export {};
