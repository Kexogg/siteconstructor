
import AdminPageContainer from "../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import {Data} from "./+data";
import {useData} from "vike-react/useData";

const Page = () => {
    //throw redirect("/admin/login")
    const data = useData<Data>()
    return (
        <AdminPageContainer title="Главная">
            <p>Организация: {data.organization}</p>
            <p>Баланс: {data.balance}</p>
        </AdminPageContainer>
    )
}

export default Page;
