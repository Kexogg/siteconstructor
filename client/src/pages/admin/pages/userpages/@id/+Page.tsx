import AdminPageContainer from "../../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import { useData } from "vike-react/useData";
import { Data } from "./+data";
import AdminTable from "../../../../../components/Admin/AdminTable/AdminTable";
import Button from "../../../../../components/Button/Button";
import AdminEditorSection from "../../../../../components/Admin/AdminEditor/AdminEditorSection";
import AdminEditorItem from "../../../../../components/Admin/AdminEditor/AdminEditorItem";
import Input from "../../../../../components/Input/Input";
import { navigate, reload } from "vike/client/router";
import Dialog from "../../../../../components/Dialog/Dialog";
import { useState } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { SubmitHandler, useForm } from "react-hook-form";
import Select from "../../../../../components/Select/Select";
import { BlockType } from "../../../../../types/blocks";
import { createBlock, deleteBlock } from "../../../../../api/block";
import { updatePage } from "../../../../../api/page";

const Page = () => {
  const data = useData<Data>();
  console.log(data);
  const context = usePageContext();
  const [dialogOpen, setDialogOpen] = useState(false);

  interface FormData {
    name: string;
    address: string;
    description: string;
    num: number;
    isEnabled: boolean;
  }

  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    await updatePage(data.id.toString(), formData, context.token).then(reload);
  };

  return (
    <>
      <AdminPageContainer title={`Страница "${data.name}"`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AdminEditorSection title={"Настройки страницы"}>
            <AdminEditorItem label={"Название"}>
              <Input defaultValue={data.name} {...register("name")} />
            </AdminEditorItem>
            <AdminEditorItem label={"Адрес"}>
              <Input defaultValue={data.address} {...register("address")} />
            </AdminEditorItem>
            <AdminEditorItem label={"Описание"}>
              <Input
                defaultValue={data.description}
                {...register("description")}
              />
            </AdminEditorItem>
            <AdminEditorItem label={"Порядок"}>
              <Input defaultValue={data.num} {...register("num")} />
            </AdminEditorItem>
            <AdminEditorItem label={"Публиковать"}>
              <Input
                type="checkbox"
                defaultChecked={data.isEnabled}
                {...register("isEnabled")}
              />
            </AdminEditorItem>
          </AdminEditorSection>
          <div className={"flex gap-3"}>
            <Button type="submit">Сохранить</Button>
            <Button outline>Удалить</Button>
          </div>
        </form>
        <h2 className={"text-xl font-bold my-3"}>Блоки</h2>
        <div className={"flex flex-col"}>
          <AdminTable
            data={data.blocks}
            columns={[
              { key: "id", title: "ID", isNarrow: true },
              { key: "num", title: "Позиция", isNarrow: true },
              { key: "type", title: "Тип", isNarrow: true },
              { key: "name", title: "Название" },
              {
                key: "isEnabled",
                title: "Публиковать",
                render: (value) => (value ? "Да" : "Нет"),
                isNarrow: true,
              },
            ]}
            actions={{
              edit: (id) => {
                navigate(
                  "/admin/userpages/" +
                    context.routeParams.id +
                    "/blocks/" +
                    id,
                );
              },
              delete: (id) => {
                deleteBlock(id, data.id.toString(), context.token).then(reload);
              },
            }}
          />
          <div className="ms-auto mt-3 w-fit">
            <span className={"mr-3"}>
              Количество элементов: {data.blocks.length}
            </span>
            <Button onClick={() => setDialogOpen(true)} outline>
              Добавить блок
            </Button>
          </div>
        </div>
      </AdminPageContainer>
      <NewBlockDialog
        onAdd={(formData) =>
          createBlock(
            { ...formData, isEnabled: false },
            data.id.toString(),
            context.token,
          ).then(reload)
        }
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
};

interface INewBlockDialogProps {
  name: string;
  type: string;
}

type NewBlockDialogProps = {
  open: boolean;
  onClose: () => void;
  onAdd: (data: INewBlockDialogProps) => void;
};

const NewBlockDialog = ({ open, onClose, onAdd }: NewBlockDialogProps) => {
  const { register, handleSubmit, reset } = useForm<INewBlockDialogProps>();

  const onSubmit = (data: INewBlockDialogProps) => {
    onAdd(data);
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} title={"Добавить блок"}>
      <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-3"}>
        <Input placeholder={"Название"} {...register("name")} />
        <Select {...register("type")}>
          <option value={""}>Выберите тип блока</option>
          {Object.values(BlockType).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </Select>
        <Button type="submit">Добавить</Button>
      </form>
    </Dialog>
  );
};

export default Page;
