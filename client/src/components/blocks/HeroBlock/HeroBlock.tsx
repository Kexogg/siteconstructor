import {HeroBlockProps} from "../../../types/blocks";

const HeroBlock = ({data}: { data: HeroBlockProps }) => {
    return (
        <section className={'h-96 flex'}>
            <img src={data.blockData.background} alt={data.blockData.header}
                 className={'absolute object-cover w-full h-96 brightness-50'}/>
            <div className={'container m-auto z-10 text-white px-3'}>
                <h2 className={'text-4xl'}>{data.blockData.header}</h2>
                {data.blockData.text}
            </div>
        </section>
    );
};

export default HeroBlock;
