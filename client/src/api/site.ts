import { ISite, IStyles } from "../types/types";
import { Method, request } from "./api";

export const getSiteByToken = async (token: string) => {
  return await request("/api/site", Method.GET, undefined, token);
};

export const updateSite = async (
  data: { siteName: string; styles: IStyles; siteAddress: string },
  token: string,
) => {
  const serializedData = {
    ...data,
    styles: JSON.stringify(data.styles),
  };
  return await request("/api/site", Method.PATCH, serializedData, token);
};

export const getSite = async (siteName: string) => {
  return (await request(`/api/site/${siteName}`, Method.GET)) as Promise<{
    site: ISite;
  }>;
};
