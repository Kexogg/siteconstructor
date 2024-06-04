import type { PageContextServer } from "vike/types";

export type Data = Awaited<ReturnType<typeof data>>;

interface IUserInfo {
  id: number;
  login: string;
  siteAddress: string;
  siteName: string;
  orgName: string;
}

export const data = async (pageContext: PageContextServer) => {
  return await fetch(
    "https://nyashdev-siteconstructor.stk8s.66bit.ru/api/user/info",
    {
      headers: { Authorization: `Bearer ${pageContext.token}` },
    },
  ).then((res) => res.json() as Promise<IUserInfo>);
};
