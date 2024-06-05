import { ISite } from "../../types/types";

declare global {
  namespace Vike {
    interface PageContext {
      site: ISite;
      routeParams: {
        siteId: string;
      };
    }
  }
}

export {};
