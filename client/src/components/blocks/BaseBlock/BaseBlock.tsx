import TextBlock from "../TextBlock/TextBlock";
import HeroBlock from "../HeroBlock/HeroBlock";
import {Block} from "../../../types/blocks";
import SpeakersBlock from "../SpeakersBlock/SpeakersBlock";
import IFrameBlock from "../IFrameBlock/IFrameBlock";

const BaseBlock = ({block}: {block: Block }) => {
    switch (block.type) {
        case 'text':
            return <TextBlock data={block}/>
        case 'hero':
            return <HeroBlock data={block}/>
        case "speakers":
            return <SpeakersBlock data={block}/>;
        default:
            return <IFrameBlock data={block}/>
    }
};

export default BaseBlock;
