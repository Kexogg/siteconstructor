import type { PageContextServer } from "vike/types";
import { getPage } from "../../../../../helpers/api";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
  return await getPage(pageContext.routeParams.id, pageContext.token);
};
