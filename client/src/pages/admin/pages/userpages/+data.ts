import type { PageContextServer } from "vike/types";
import { CssConfig, IPage, WithId } from "../../../../types/types";

export type Data = Awaited<ReturnType<typeof data>>;

interface ISite {
  id: number;
  siteAddress: string;
  siteName: string;
  styles: CssConfig | null;
  pages: WithId<IPage>[];
}

export const data = async (pageContext: PageContextServer) => {
  return await fetch(
    "https://nyashdev-siteconstructor.stk8s.66bit.ru/api/site",
    {
      headers: {
        Authorization: "Bearer " + pageContext.token,
      },
    },
  )
    .then((res) => res.json())
    .then((data) => data.site as ISite);
};
