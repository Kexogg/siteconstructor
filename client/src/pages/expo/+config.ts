import { Config } from "vike/types";
import vikeReact from "vike-react/config";
import Head from "./layouts/HeadDefault"
import Layout from "./layouts/LayoutDefault";

export default {
    Layout,
    Head,
    extends: vikeReact,
    filesystemRoutingRoot: '/'
} satisfies Config
