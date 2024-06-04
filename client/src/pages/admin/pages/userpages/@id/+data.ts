import type { PageContextServer } from "vike/types";
import { IPageData } from "../../../../../types/types";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
  return await fetch(
    "https://nyashdev-siteconstructor.stk8s.66bit.ru/api/site/page/" +
      pageContext.routeParams.id,
    {
      headers: {
        Authorization: "Bearer " + pageContext.token,
      },
    },
  )
    .then((response) => response.json())
    .then((data) => data.page as IPageData);
};
