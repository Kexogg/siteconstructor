import {Method, requestApi} from "./api";
import {Block, BlockType} from "../types/blocks";

interface IBlockDataModel {
    name: string;
    isEnabled: boolean;
    jsonb: string | null;
    type: BlockType;
}

export const createBlock = async (
    data: IBlockDataModel,
    pageId: string | number,
    token: string,
) => {
    return await requestApi(
        `/api/site/pages/${pageId}/block`,
        Method.POST,
        data,
        token,
    );
};

export const getBlock = async (id: string, page: string, token: string) => {
    return await requestApi(
        `/api/site/pages/${page}/block/${id}`,
        Method.GET,
        undefined,
        token,
    ) as Promise<{ block: Block }>;
};

export const updateBlock = async (
    id: string,
    page: string,
    data: IBlockDataModel,
    token: string,
) => {
    return await requestApi(
        `/api/site/pages/${page}/block/${id}`,
        Method.PATCH,
        data,
        token,
    );
};

export const moveBlock = async (
    id: string,
    page: string,
    num: number,
    token: string,
) => {
    return await requestApi(
        `/api/site/pages/${page}/block`,
        Method.PATCH,
        {id: id, num: num},
        token,
    );
}

export const deleteBlock = async (id: string, page: string, token: string) => {
    return await requestApi(
        `/api/site/pages/${page}/block/${id}`,
        Method.DELETE,
        undefined,
        token,
    );
};
