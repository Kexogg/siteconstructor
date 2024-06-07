import { IUserInfo } from "../types/types";
import { Method, request } from "./api";

export const userLogin = async (login: string, password: string) => {
  return await request("/api/user/login", Method.POST, {
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
  return await request("/api/user/register", Method.POST, {
    login,
    password,
    orgName,
    siteName,
    siteAddress,
  });
};

export const userLogout = async () => {
  return await request("/_auth/logout", Method.POST);
};

export const deleteUser = async (token: string) => {
  return await request("/api/user", Method.DELETE, undefined, token);
};

export const getUserInfo = async (token: string) => {
  return (await request(
    "/api/user/info",
    Method.GET,
    undefined,
    token,
  )) as Promise<IUserInfo>;
};
