import {CSSProperties} from "react";
import {CssConfig} from "../types/types";

export const useInlineCustomCss = (data: CssConfig) => {
    return {
        "--user-primary-color": data.primaryColor,
        "--user-secondary-color": data.secondaryColor,
        "--user-accent-color": data.accentColor,
        "--user-text-color": data.textColor,
        "--user-background-color": data.backgroundColor,
        "--user-font-family-text": data.fontFamily,
        "--user-font-family-headers": data.fontFamilyHeaders,
        "--user-font-size": data.fontSize,
        "--user-font-size-headers": data.fontSizeHeaders,
        "--user-border-radius": data.borderRadius
    } as CSSProperties;
}
