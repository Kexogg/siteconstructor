import {CssConfig} from "../../../../types/types";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async () => {
    const cssConfig: CssConfig = {
        primaryColor: "#123000",
        secondaryColor: "#456000",
        accentColor: "#789000",
        backgroundColor: "#ABC000",
        textColor: "#DEF000",
        fontSize: "16pt",
        fontSizeHeaders: "24pt",
        fontFamily: "Open Sans",
        fontFamilyHeaders: "Roboto"
    }
    return cssConfig;
};
