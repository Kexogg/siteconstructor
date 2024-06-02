import {CSSProperties} from "react";

declare global {
    namespace Vike {
        interface PageContext {
            site: {
                pages: {name: string, address: string}[]
            }
            style: CSSProperties
            routeParams: {
                siteId: string
            }
        }
    }
}

export {}
