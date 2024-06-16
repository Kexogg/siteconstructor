import { CSSProperties } from "react";
import { IStyles } from "../types/types";


export const useInlineCustomColors = (data: IStyles | null | undefined) => {
    if (!data) return {};
    return {
        "--user-primary-color": data.primaryColor,
        "--user-secondary-color": data.secondaryColor,
        "--user-accent-color": data.accentColor,
        "--user-text-color": data.textColor,
        "--user-background-color": data.backgroundColor,
    } as CSSProperties;
};
