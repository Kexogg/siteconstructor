import { IPageData } from "../types/types";
import { Method, requestApi } from "./api";

export const getPages = async (token: string) => {
  return await requestApi("/api/site/page", Method.GET, undefined, token);
};

export const createPage = async (
  data: { address: string; name: string; description: string },
  token: string,
) => {
  return await requestApi("/api/site/page", Method.POST, data, token);
};

export const getPageByToken = async (id: string, token: string) => {
  return (await requestApi(
    `/api/site/page/${id}`,
    Method.GET,
    undefined,
    token,
  ).then((r) => r.page)) as Promise<IPageData>;
};

export const getPage = async (id: string, site: string) => {
  return (await requestApi(`/api/site/${site}/page/${id}`, Method.GET).then(
    (r) => r.page,
  )) as Promise<IPageData>;
};

export const updatePage = async (
  id: string,
  data: {
    address: string;
    name: string;
    description: string;
    isEnabled: boolean;
  },
  token: string,
) => {
  return await requestApi(`/api/site/page/${id}`, Method.PATCH, data, token);
};

export const deletePage = async (id: string, token: string) => {
  return await requestApi(
    `/api/site/page/${id}`,
    Method.DELETE,
    undefined,
    token,
  );
};
