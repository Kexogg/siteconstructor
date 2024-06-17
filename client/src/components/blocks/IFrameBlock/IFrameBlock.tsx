import { IFrameBlockProps } from "../../../types/blocks";
import {useInlineCustomCss} from "../../../hooks/useInlineCustomCss";

const IFrameBlock = ({ data }: { data: IFrameBlockProps }) => {
  return (
    <section className={"h-96 flex"} style={useInlineCustomCss(data.jsonb.styles)}>
      <div
        className={
          "bg-user-background container mx-auto flex py-5 justify-center flex-col items-center gap-5"
        }
      >
        <h2 className={"text-4xl-center text-user-text"}>{data.jsonb.title}</h2>
        <div>
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
