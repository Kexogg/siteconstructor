import { OnBeforeRenderAsync, PageContextServer } from "vike/types";
import { DEFAULT_STYLES } from "../../../../../helpers/const";
import { getSite } from "../../../../../helpers/api";

export const onBeforeRender: OnBeforeRenderAsync = async (
  pageContext: PageContextServer,
): ReturnType<OnBeforeRenderAsync> => {
  const site = await getSite(pageContext.routeParams.siteId);
  return {
    pageContext: {
      site: site.site,
    },
  };
};
