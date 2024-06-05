import { IPageData } from "../types/types";
import { Method, request } from "./api";

export const getPages = async (token: string) => {
  return await request("/api/site/page", Method.GET, undefined, token);
};

export const createPage = async (
  data: { address: string; name: string; description: string },
  token: string,
) => {
  return await request("/api/site/page", Method.POST, data, token);
};

export const getPageByToken = async (id: string, token: string) => {
  return (await request(
    `/api/site/page/${id}`,
    Method.GET,
    undefined,
    token,
  ).then((r) => r.page)) as Promise<IPageData>;
};

export const getPage = async (id: string, site: string) => {
  return (await request(`/api/site/${site}/page/${id}`, Method.GET).then(
    (r) => r.page,
  )) as Promise<IPageData>;
};

//TODO: Fix type
export const updatePage = async (id: string, data: unknown, token: string) => {
  return await request(`/api/site/page/${id}`, Method.PATCH, data, token);
};

export const deletePage = async (id: string, token: string) => {
  return await request(`/api/site/page/${id}`, Method.DELETE, undefined, token);
};
