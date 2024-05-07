import {HeroBlockProps} from "../../../types/blocks";

const HeroBlock = ({data}: {data: HeroBlockProps}) => {
    return (
        <div>
            {JSON.stringify(data)}
            <h2>Hero block</h2>
        </div>
    );
};

export default HeroBlock;
