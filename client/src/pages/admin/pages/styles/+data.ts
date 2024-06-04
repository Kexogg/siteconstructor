import { getSiteByToken } from "../../../../helpers/api";
import { PageContextServer } from "vike/types";
import { DEFAULT_STYLES } from "../../../../helpers/const";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (PageContext: PageContextServer) => {
  return (
    (await getSiteByToken(PageContext.token).then((s) => s.styles)) ??
    DEFAULT_STYLES
  );
};
