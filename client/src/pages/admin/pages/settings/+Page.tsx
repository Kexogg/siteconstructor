import AdminPageContainer from "../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import { Data } from "./+data";
import { useData } from "vike-react/useData";
import AdminEditorSection from "../../../../components/Admin/AdminEditor/AdminEditorSection";
import AdminEditorItem from "../../../../components/Admin/AdminEditor/AdminEditorItem";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import { navigate } from "vike/client/router";
import { deleteUser, userLogout } from "../../../../api/user";

const Page = () => {
  const data = useData<Data>();
  console.log(data);
  return (
    <AdminPageContainer title={"Настройки"}>
      <AdminEditorSection>
        <AdminEditorItem label={"Email"}>
          <Input disabled value={data.login} onChange={() => {}} />
        </AdminEditorItem>
        <AdminEditorItem label={"Навзание организации"}>
          <Input disabled value={data.orgName} onChange={() => {}} />
        </AdminEditorItem>
        <AdminEditorItem label={"Название сайта"}>
          <Input disabled value={data.siteAddress} onChange={() => {}} />
        </AdminEditorItem>
      </AdminEditorSection>
      <div className={"flex gap-3"}>
        <Button
          outline
          onClick={() => {
            userLogout().then(() => navigate("/admin/login"));
          }}
        >
          Выйти
        </Button>
        <Button
          onClick={() => deleteUser().then(() => navigate("/admin/login"))}
        >
          Удалить аккаунт
        </Button>
      </div>
    </AdminPageContainer>
  );
};

export default Page;
