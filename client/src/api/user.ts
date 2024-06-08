import { IUserInfo } from "../types/types";
import { Method, requestApi } from "./api";

export const userLogin = async (login: string, password: string) => {
  return await requestApi("/api/user/login", Method.POST, {
    login,
    password,
  });
};

export const userRegister = async (
  login: string,
  password: string,
  orgName: string,
  siteName: string,
  siteAddress: string,
) => {
  return await requestApi("/api/user/register", Method.POST, {
    login,
    password,
    orgName,
    siteName,
    siteAddress,
  });
};

export const userLogout = async () => {
  return await requestApi("/_auth/logout", Method.POST);
};

export const deleteUser = async (token: string) => {
  return await requestApi("/api/user", Method.DELETE, undefined, token);
};

export const getUserInfo = async (token: string) => {
  return (await requestApi(
    "/api/user/info",
    Method.GET,
    undefined,
    token,
  )) as Promise<IUserInfo>;
};
