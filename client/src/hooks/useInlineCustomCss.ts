import { CSSProperties } from "react";
import { IStyles } from "../types/types";
import { DEFAULT_STYLES } from "../helpers/const";

export const useInlineCustomCss = (data: IStyles | null) => {
  if (!data) data = DEFAULT_STYLES;
  return {
    "--user-primary-color": data.primaryColor,
    "--user-secondary-color": data.secondaryColor,
    "--user-accent-color": data.accentColor,
    "--user-text-color": data.textColor,
    "--user-background-color": data.backgroundColor,
    "--user-font-family-text": data.fontFamily,
    "--user-font-family-headers": data.fontFamilyHeaders,
    "--user-font-size": data.fontSize + 'pt',
    "--user-font-size-headers": data.fontSizeHeaders + 'pt',
    "--user-border-radius": data.borderRadius + 'px',
  } as CSSProperties;
};
