import TextBlock from "../TextBlock/TextBlock";
import HeroBlock from "../HeroBlock/HeroBlock";
import {Block} from "../../../types/blocks";

const BaseBlock = ({block}: {block: Block }) => {
    switch (block.type) {
        case 'text':
            return <TextBlock data={block}/>
        case 'hero':
            return <HeroBlock data={block}/>
        default:
            return <div>Block type error: {block}</div>
    }
};

export default BaseBlock;
