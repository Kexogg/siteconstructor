import { Config } from "vike/types";
import vikeReact from "vike-react/config";
import Layout from "./layouts/layout";
import {Head} from "./layouts/Head";

export default {
    extends: vikeReact,
    filesystemRoutingRoot: '/',
    Head,
    Layout
} satisfies Config
