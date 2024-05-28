import {TextBlockProps} from "../../../types/blocks";

const TextBlock = ({data}: {data: TextBlockProps}) => {
    return (
        <section className={'bg-primary-950 text-white'}>
            <div className={'container mx-auto p-3 text-center'}>
                <h2 className={'text-2xl'}>{data.blockData.text}</h2>
                {data.blockData.textSmall}
            </div>
        </section>
    );
};

export default TextBlock;
