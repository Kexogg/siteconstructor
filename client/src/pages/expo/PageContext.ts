import { ISiteUserData } from "../../types/types";

declare global {
  namespace Vike {
    interface PageContext {
      site: ISiteUserData;
      routeParams: {
        siteId: string;
      };
    }
  }
}

export {};
