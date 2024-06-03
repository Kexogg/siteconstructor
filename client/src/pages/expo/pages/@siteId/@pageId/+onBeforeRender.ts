import { OnBeforeRenderAsync, PageContextServer } from "vike/types";
import { DEFAULT_STYLES } from "../../../../../helpers/const";

export const onBeforeRender: OnBeforeRenderAsync = async (
  pageContext: PageContextServer,
): ReturnType<OnBeforeRenderAsync> => {
  const site = await fetch(
    `https://nyashdev-siteconstructor.stk8s.66bit.ru/api/site/${pageContext.routeParams.siteId}`,
  )
    .then((res) => res.json())
    .then((res) => res.site);
  console.log(site, pageContext.routeParams.siteId);
  return {
    pageContext: {
      site: { ...site, styles: site.styles ?? DEFAULT_STYLES },
    },
  };
};
