import { BASE_URL } from "../helpers/const";

export enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export const requestApi = async (
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
  if (!response.ok) {
    throw new Error(
      `Request failed: ${response.status} ${response.statusText} ${response.url}`,
    );
  }
  const responseBody = await response.text();
  return responseBody ? JSON.parse(responseBody) : null;
};
