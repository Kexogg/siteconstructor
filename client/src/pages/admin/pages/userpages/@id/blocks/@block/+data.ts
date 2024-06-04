import { PageContextServer } from "vike/types";
import { Block } from "../../../../../../../types/blocks";
import { generateBlockStub } from "../../../../../../../helpers/generateBlockStub";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
  return await fetch(
    "https://nyashdev-siteconstructor.stk8s.66bit.ru/api/site/pages/" +
      pageContext.routeParams.id +
      "/block/" +
      pageContext.routeParams.block,
    {
      headers: {
        Authorization: "Bearer " + pageContext.token,
      },
    },
  )
    .then((res) => res.json())
    .then((data: { block: Block }) => {
      return {
        ...data.block,
        jsonb: data.block.jsonb ?? generateBlockStub(data.block.type).jsonb,
      } as Block;
    });
};
