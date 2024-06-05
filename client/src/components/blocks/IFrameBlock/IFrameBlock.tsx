import { IFrameBlockProps } from "../../../types/blocks";

const IFrameBlock = ({ data }: { data: IFrameBlockProps }) => {
  return (
    <section className={"h-96 flex"}>
      <div
        className={
          "container mx-auto flex py-5 justify-center flex-col items-center gap-5"
        }
      >
        <h2 className={"text-4xl text-center"}>{data.jsonb.title}</h2>
        <div className={""}>
          <iframe
            src={data.jsonb.src}
            className={"h-72 aspect-video"}
            title={data.jsonb.title}
          />
        </div>
      </div>
    </section>
  );
};

export default IFrameBlock;
