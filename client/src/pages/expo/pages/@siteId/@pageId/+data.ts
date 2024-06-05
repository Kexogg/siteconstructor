import type { PageContextServer } from "vike/types";
import { getPage } from "../../../../../api/page";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
  const pageId = pageContext.routeParams["*"];
  const siteId = pageContext.routeParams.siteId;

  return await getPage(pageId, siteId);
};
