//import {redirect} from "vike/abort";

import AdminPageTitle from "../../../../components/AdminPagetitle/AdminPageTitle";
import AdminPageContainer from "../../../../components/AdminPageContainer/AdminPageContainer";

const Page = () => {
    //throw redirect("/admin/login")
    return (
        <AdminPageContainer>
            <AdminPageTitle>Главная</AdminPageTitle>
        </AdminPageContainer>
    )
}

export default Page;
