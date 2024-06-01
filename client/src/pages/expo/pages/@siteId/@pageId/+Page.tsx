import {useData} from "vike-react/useData";
import {Data} from "./+data";
import BaseBlock from "../../../../../components/blocks/BaseBlock/BaseBlock";
import { Block } from "../../../../../types/blocks";

const Page = () => {
    const data = useData<Data>()
    if (!data.blocks) return null
    return (
        <main>
            {data.blocks.map((block: Block) => (
                <BaseBlock key={block.id} block={block}/>
            ))}
        </main>
    );
};

export default Page;
