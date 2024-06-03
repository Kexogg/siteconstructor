import type { PageContextServer } from "vike/types";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
  const pageId = pageContext.routeParams["*"];
  const siteId = pageContext.routeParams.siteId;
  const page = await fetch(
    `https://nyashdev-siteconstructor.stk8s.66bit.ru/api/site/${siteId}/page/${pageId}`,
  )
    .then((res) => res.json())
    .then((res) => res.page);
  const site = await fetch(
    `https://nyashdev-siteconstructor.stk8s.66bit.ru/api/site/${siteId}`,
  )
    .then((res) => res.json())
    .then((res) => res.site);
  return { page: page, site: site };
};
