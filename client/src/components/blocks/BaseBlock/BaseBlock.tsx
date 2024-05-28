import TextBlock from "../TextBlock/TextBlock";
import HeroBlock from "../HeroBlock/HeroBlock";
import {Block} from "../../../types/blocks";
import SpeakersBlock from "../SpeakersBlock/SpeakersBlock";

const BaseBlock = ({block}: {block: Block }) => {
    switch (block.type) {
        case 'text':
            return <TextBlock data={block}/>
        case 'hero':
            return <HeroBlock data={block}/>
        case "speakers":
            return <SpeakersBlock data={block}/>;
        default:
            return <div>Block type error: {block}</div>
    }
};

export default BaseBlock;
