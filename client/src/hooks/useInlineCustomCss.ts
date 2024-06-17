import { CSSProperties } from "react";
import { ISiteStyles } from "../types/types";
import {DEFAULT_STYLES, STYLES_KEYS, STYLES_SUFFIXES} from "../helpers/const";


export const useInlineCustomCss = (data: ISiteStyles | null | undefined) => {
  if (data === null) data = DEFAULT_STYLES
  if (data === undefined) return {};
  const styles: CSSProperties = {}
  for (const key in STYLES_KEYS) {
    if (data[key as keyof ISiteStyles]) {
      // @ts-expect-error TS2590
      styles[STYLES_KEYS[key]] = data[key as keyof ISiteStyles] + (STYLES_SUFFIXES[key] ?? '');
    }
  }
  return styles;

};
