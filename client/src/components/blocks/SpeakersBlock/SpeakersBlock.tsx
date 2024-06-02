import {SpeakersBlockProps} from "../../../types/blocks";

const SpeakersBlock = ({data}: { data: SpeakersBlockProps }) => {
    return (
        <section className={'h-96 py-5 bg-user-background'}>
            <h1 className={'text-4xl text-center'}>Спикеры</h1>
            <div className={'flex justify-between container mx-auto mt-5'}>
                {data.jsonb.speakers.map(speaker => (
                    <div key={speaker.name} className={'flex items-center flex-col'}>
                        <img src={speaker.photo} alt={speaker.name} className={'w-40 h-40 rounded-full object-cover'}/>
                        <div className={'text-center'}>
                            <h2 className={'text-xl'}>{speaker.name}</h2>
                            {speaker.position}
                        </div>
                    </div>
                ))
                }
            </div>
        </section>
    );
};

export default SpeakersBlock;
