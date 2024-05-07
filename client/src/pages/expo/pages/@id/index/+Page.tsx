import {useData} from "vike-react/useData";
import {Data} from "./+data";
import BaseBlock from "../../../../../components/blocks/BaseBlock/BaseBlock";

const Page = () => {
    const data = useData<Data>()
    console.log(data)
    return (
        <main>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            {data.blocks.map(block => (
                <BaseBlock key={block.id} block={block}/>
            ))}
        </main>
    );
};

export default Page;
