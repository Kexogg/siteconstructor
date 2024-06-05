import type { PageContextServer } from "vike/types";
import { getPageByToken } from "../../../../../api/page";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
  return await getPageByToken(pageContext.routeParams.id, pageContext.token);
};
