import {usePageContext} from "vike-react/usePageContext";
import {IPageDetailedData} from "../../../types/types";

export default function HeadDefault() {
    const context = usePageContext();
    return (
        <>
            <title>{(context.data as IPageDetailedData).name}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta
                name="description"
                content={(context.data as IPageDetailedData).description}
            />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'}/>
            {context.site.styles?.fontFamily && (
                <link
                    rel="stylesheet"
                    href={`https://fonts.googleapis.com/css?family=${context.site.styles.fontFamily.replace(
                        " ",
                        "+",
                    )}&display=swap`}
                />
            )}
            {context.site.styles?.fontFamilyHeaders && (
                <link
                    rel="stylesheet"
                    href={`https://fonts.googleapis.com/css?family=${context.site.styles.fontFamilyHeaders.replace(
                        " ",
                        "+",
                    )}&display=swap`}
                />
            )}
        </>
    );
}
