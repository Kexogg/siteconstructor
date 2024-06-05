import { OnBeforeRenderAsync, PageContextServer } from "vike/types";
import { getSite } from "../../../../../api/site";

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
