import { Config } from "vike/types";
import vikeReact from "vike-react/config";
import Layout from "./layouts/AdminLayout";

export default {
    Layout,
    passToClient: [
        'token',
        'routeParams'
    ],
    extends: vikeReact,
} satisfies Config
