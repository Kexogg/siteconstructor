import AdminPageContainer from "../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import { Data } from "./+data";
import { useData } from "vike-react/useData";

const Page = () => {
  const data = useData<Data>();
  return (
    <AdminPageContainer title="Главная">
      <p>ID: {data.id}</p>
      <p>Email: {data.login}</p>
      <p>Организация: {data.orgName}</p>
      <p>
        Ваш сайт:{" "}
        <a className={"underline"} href={`/expo/${data.siteAddress}/`}>
          {data.siteAddress}
        </a>
      </p>
    </AdminPageContainer>
  );
};

export default Page;
