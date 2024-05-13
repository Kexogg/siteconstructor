import {HeroBlockProps} from "../../../types/blocks";

const HeroBlock = ({data}: { data: HeroBlockProps }) => {
    return (
        <section className={'h-96 flex'}>
            <img src={data.blockData.background} alt={data.blockData.header}
                 className={'absolute object-cover w-full h-96'}/>
            <div className={'container m-auto z-10'}>
                <h2 className={'text-4xl text-white'}>Hero block</h2>
                {JSON.stringify(data)}
            </div>
        </section>
    );
};

export default HeroBlock;
