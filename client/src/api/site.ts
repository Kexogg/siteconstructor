import { ISite, IStyles } from "../types/types";
import { Method, requestApi } from "./api";

export const getSiteByToken = async (token: string) => {
  return await requestApi("/api/site", Method.GET, undefined, token);
};

export const updateSite = async (
  data: { siteName: string; styles: IStyles; siteAddress: string },
  token: string,
) => {
  const serializedData = {
    ...data,
    styles: JSON.stringify(data.styles),
  };
  return await requestApi("/api/site", Method.PATCH, serializedData, token);
};

export const getSite = async (siteName: string) => {
  return (await requestApi(`/api/site/${siteName}`, Method.GET)) as Promise<{
    site: ISite;
  }>;
};
