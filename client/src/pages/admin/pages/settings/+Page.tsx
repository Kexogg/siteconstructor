import AdminPageContainer from "../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import {Data} from "./+data";
import {useData} from "vike-react/useData";


const Page = () => {
    const data = useData<Data>()
    return (
        <AdminPageContainer title={'Настройки'}>

        </AdminPageContainer>
    );
};

export default Page;
