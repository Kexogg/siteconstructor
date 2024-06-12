import {useEffect} from "react";

export const useGoogleFonts = (fonts: string[]) => {
    //append link tag to head, remove on unmount
    useEffect(() => {
        const link = document.createElement("link");
        link.href = `https://fonts.googleapis.com/css?family=${fonts.map((f) => encodeURIComponent(f)).join("|")}`;
        link.rel = "stylesheet";
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
        };
    }, [fonts]);
}
