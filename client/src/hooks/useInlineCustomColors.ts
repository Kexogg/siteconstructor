import { CSSProperties } from "react";
import { ISiteStyles } from "../types/types";


export const useInlineCustomColors = (data: ISiteStyles | null | undefined) => {
    if (!data) return {};
    return {
        "--user-primary-color": data.primaryColor,
        "--user-secondary-color": data.secondaryColor,
        "--user-accent-color": data.accentColor,
        "--user-text-color": data.textColor,
        "--user-background-color": data.backgroundColor,
    } as CSSProperties;
};
