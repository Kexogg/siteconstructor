import type { PageContextServer } from "vike/types";
import { getPageByToken } from "../../../../../api/page";
import {getSiteByToken} from "../../../../../api/site";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
  const page = await getPageByToken(pageContext.routeParams.id, pageContext.token);
  const site = await getSiteByToken(pageContext.token);
  return {
    ...page,
    ...site,
  }
};
