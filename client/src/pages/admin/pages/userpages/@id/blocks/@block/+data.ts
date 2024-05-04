import {Block} from "../../../../../../../types/types";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async () => {
    const block: Block = {
        id: "1",
        type: "text",
        name: "Текст на главной",
        blockData: {
            text: "Hello, world!"
        }
    }
    return block;
}
