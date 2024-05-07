import {TextBlockProps} from "../../../types/blocks";

const TextBlock = ({data}: {data: TextBlockProps}) => {
    return (
        <div>
            <h2>Text block stub</h2>
            BlockData: {JSON.stringify(data)}
        </div>
    );
};

export default TextBlock;
