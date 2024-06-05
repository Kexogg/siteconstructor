import { PageContextServer } from "vike/types";
import { DEFAULT_STYLES } from "../../../../helpers/const";
import { getSiteByToken } from "../../../../api/site";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (PageContext: PageContextServer) => {
  return await getSiteByToken(PageContext.token).then((r) => {
    return {
      siteName: r.site.siteName,
      styles: r.site.styles ?? DEFAULT_STYLES,
      siteAddress: r.site.siteAddress,
    };
  });
};
