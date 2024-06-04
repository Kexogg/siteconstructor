import AdminPageContainer from "../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import AdminTable from "../../../../components/Admin/AdminTable/AdminTable";
import { useData } from "vike-react/useData";
import { Data } from "./+data";
import { navigate, reload } from "vike/client/router";
import Button from "../../../../components/Button/Button";
import Dialog from "../../../../components/Dialog/Dialog";
import Input from "../../../../components/Input/Input";
import { useState } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { useForm } from "react-hook-form";
import { createPage, deletePage } from "../../../../helpers/api";

interface IPage {
  address: string;
  name: string;
  description: string;
}

const Page = () => {
  const data = useData<Data>().site;
  console.log(data);
  const context = usePageContext();
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <AdminPageContainer title="Страницы">
      <p>В этом разделе вы можете управлять страницами сайта</p>
      <div className={"flex py-3 flex-col"}>
        <AdminTable
          data={data.pages}
          columns={[
            { key: "num", title: "Позиция", isNarrow: true },
            { key: "name", title: "Название" },
            { key: "description", title: "Описание" },
            { key: "address", title: "Адрес" },
            {
              key: "isEnabled",
              title: "Опубликовано",
              isNarrow: true,
              render: (value) => (value ? "Да" : "Нет"),
            },
          ]}
          actions={{
            edit: (id) => {
              navigate("/admin/userpages/" + id);
            },
            //FIXME: not reloading
            delete: (id) => {
              deletePage(id, context.token).then(() => reload());
            },
          }}
        />
        <div className="ms-auto mt-3 w-fit">
          <span className={"mr-3"}>
            Количество элементов: {data.pages.length}
          </span>
          <Button outline onClick={() => setDialogOpen(true)}>
            Добавить страницу
          </Button>
        </div>
      </div>
      <NewPageDialog
        onAdd={(data) => createPage(data, context.token).then(() => reload())}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </AdminPageContainer>
  );
};

type NewPageDialogProps = {
  open: boolean;
  onClose: () => void;
  onAdd: (data: IPage) => void;
};

const NewPageDialog = ({ open, onClose, onAdd }: NewPageDialogProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPage>();

  const onSubmit = (data: IPage) => {
    onAdd(data);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} title={"Добавить страницу"}>
      <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-3"}>
        <Input
          placeholder={"Адрес"}
          {...register("address", { required: true })}
        />
        {errors.address && <span>Это поле обязательно</span>}

        <Input
          placeholder={"Название"}
          {...register("name", { required: true })}
        />
        {errors.name && <span>Это поле обязательно</span>}

        <Input
          placeholder={"Описание"}
          {...register("description", { required: true })}
        />
        {errors.description && <span>Это поле обязательно</span>}

        <Button type="submit">Добавить</Button>
      </form>
    </Dialog>
  );
};

export default Page;
