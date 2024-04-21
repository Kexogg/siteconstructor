import {redirect} from "vike/abort";

const Page = () => {
    throw redirect("/admin/login")
}

export default Page;
