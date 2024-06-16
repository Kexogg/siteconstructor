import {TextBlockProps} from "../../../types/blocks";
import {useInlineCustomCss} from "../../../hooks/useInlineCustomCss";

const TextBlock = ({data}: {data: TextBlockProps}) => {
    return (
        <section style={useInlineCustomCss(data.jsonb.styles)} className={'bg-user-background text-user-text'}>
            <div className={'container mx-auto p-3 text-center'}>
                <h2 className={'text-user-big'}>{data.jsonb.text}</h2>
                <p className={'text-user-small'}>{data.jsonb.textSmall}</p>
            </div>
        </section>
    );
};

export default TextBlock;
