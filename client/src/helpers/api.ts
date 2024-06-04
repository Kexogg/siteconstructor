import { CssConfig, IPageData, ISite, IUserInfo } from "../types/types";

const BASE_URL = "https://nyashdev-siteconstructor.stk8s.66bit.ru";

export enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

const request = async (
  url: string,
  method: Method,
  data?: unknown,
  token?: string,
) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await fetch(
    `${method == Method.GET ? BASE_URL : ""}${url}`,
    {
      method,
      headers: token
        ? { ...headers, Authorization: `Bearer ${token}` }
        : headers,
      body: data ? JSON.stringify(data) : undefined,
    },
  );
  return await response.json();
};

export const createBlock = async (data: never, token: string) => {
  return await request("/api/site/pages", Method.POST, data, token);
};

export const getBlock = async (id: string, token: string) => {
  return await request(`/api/site/pages/${id}`, Method.GET, undefined, token);
};

export const updateBlock = async (id: string, data: never, token: string) => {
  return await request(`/api/site/pages/${id}`, Method.PATCH, data, token);
};

export const deleteBlock = async (id: string, token: string) => {
  return await request(
    `/api/site/pages/${id}`,
    Method.DELETE,
    undefined,
    token,
  );
};

export const getBlocks = async (token: string) => {
  return await request("/api/site/page", Method.GET, undefined, token);
};

export const getPages = async (token: string) => {
  return await request("/api/site/page", Method.GET, undefined, token);
};

export const createPage = async (
  data: { address: string; name: string; description: string },
  token: string,
) => {
  return await request("/api/site/page", Method.POST, data, token);
};

export const getPage = async (id: string, token: string) => {
  return (await request(
    `/api/site/page/${id}`,
    Method.GET,
    undefined,
    token,
  ).then((r) => r.page)) as Promise<IPageData>;
};

export const updatePage = async (id: string, data: never, token: string) => {
  return await request(`/api/site/page/${id}`, Method.PATCH, data, token);
};

export const deletePage = async (id: string, token: string) => {
  return await request(`/api/site/page/${id}`, Method.DELETE, undefined, token);
};

export const getSiteByToken = async (token: string) => {
  return await request("/api/site", Method.GET, undefined, token);
};

export const updateSite = async (
  data: { siteName: string; styles: CssConfig },
  token: string,
) => {
  const serializedData = {
    ...data,
    styles: JSON.stringify(data.styles),
  };
  return await request("/api/site", Method.PATCH, serializedData, token);
};

export const getSite = async (siteName: string) => {
  return (await request(`/api/site/${siteName}`, Method.GET)) as Promise<ISite>;
};

export const getUserInfo = async (token: string) => {
  return (await request(
    "/api/user/info",
    Method.GET,
    undefined,
    token,
  )) as Promise<IUserInfo>;
};
