import { PageContextServer } from "vike/types";
import { Block } from "../../../../../../../types/blocks";
import { generateBlockStub } from "../../../../../../../helpers/generateBlockStub";
import { getBlock } from "../../../../../../../api/block";
import {getSiteByToken} from "../../../../../../../api/site";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
  const site = await getSiteByToken(pageContext.token);
  const block = await getBlock(
    pageContext.routeParams.block,
    pageContext.routeParams.id,
    pageContext.token,
  ).then((data: { block: Block }) => {
    return {
      ...data.block,
      jsonb: data.block.jsonb ?? generateBlockStub(data.block.type).jsonb,
    } as Block;
  });
  return { site, block };
};
