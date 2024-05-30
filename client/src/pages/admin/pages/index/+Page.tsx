
import AdminPageContainer from "../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import {Data} from "./+data";
import {useData} from "vike-react/useData";

const Page = () => {
    //throw redirect("/admin/login")
    const data = useData<Data>()
    console.log(data)
    return (
        <AdminPageContainer title="Главная">
            <p>ID: {data.id}</p>
            <p>Email: {data.login}</p>
            <p>Организация: {data.orgName}</p>
        </AdminPageContainer>
    )
}

export default Page;
