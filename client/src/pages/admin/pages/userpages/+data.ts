import type { PageContextServer } from "vike/types";
import { getSiteByToken } from "../../../../api/site";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
  return await getSiteByToken(pageContext.token);
};
