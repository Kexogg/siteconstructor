import { Method, request } from "./api";

//TODO: Fix type
export const createBlock = async (
  data: unknown,
  pageId: string,
  token: string,
) => {
  return await request(
    `/api/site/pages/${pageId}/block`,
    Method.POST,
    data,
    token,
  );
};

export const getBlock = async (id: string, page: string, token: string) => {
  return await request(
    `/api/site/pages/${page}/block/${id}`,
    Method.GET,
    undefined,
    token,
  );
};

//TODO: Fix type
export const updateBlock = async (
  id: string,
  page: string,
  data: unknown,
  token: string,
) => {
  return await request(
    `/api/site/pages/${page}/block/${id}`,
    Method.PATCH,
    data,
    token,
  );
};

export const deleteBlock = async (id: string, page: string, token: string) => {
  return await request(
    `/api/site/pages/${page}/block/${id}`,
    Method.DELETE,
    undefined,
    token,
  );
};
