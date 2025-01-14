import type { PageContextServer } from "vike/types";
import { getUserInfo } from "../../../../api/user";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
  return await getUserInfo(pageContext.token);
};
