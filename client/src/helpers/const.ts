import {ISiteStyles} from "../types/types";

export const BASE_URL = "https://nyashdev-siteconstructor.stk8s.66bit.ru";

export const DEFAULT_STYLES: ISiteStyles = {
    primaryColor: "#ffffff",
    secondaryColor: "#959595",
    accentColor: "#003cff",
    textColor: "#000",
    backgroundColor: "#98ff7d",
    fontFamily: "Roboto",
    fontFamilyHeaders: "Roboto",
    fontSize: "16pt",
    fontSizeHeaders: "24pt",
    borderRadius: "5px",
};

export const STYLES_KEYS = {
    primaryColor: "--user-primary-color",
    secondaryColor: "--user-secondary-color",
    accentColor: "--user-accent-color",
    textColor: "--user-text-color",
    backgroundColor: "--user-background-color",
    fontFamily: "--user-font-family-text",
    fontFamilyHeaders: "--user-font-family-headers",
    fontSize: "--user-font-size",
    fontSizeHeaders: "--user-font-size-headers",
    borderRadius: "--user-border-radius",
};

export const STYLES_SUFFIXES = {
    fontSize: "pt",
    fontSizeHeaders: "pt",
    borderRadius: "px",
};

export const AVAILABLE_FONTS = [
    "Georgia",
    "Tahoma",
    "Trebuchet MS",
    "Palatino Linotype",
    "Lucida Console",
    "Roboto",
    "Open Sans",
    "Lato",
    "Montserrat",
    "Source Sans Pro",
    "Raleway",
    "Oswald",
    "Roboto Condensed",
    "Roboto Slab",
    "Merriweather",
    "Lora",
    "Playfair Display",
    "Poppins",
    "Nunito",
    "Ubuntu",
    "Dosis",
    "Fira Sans",
];

