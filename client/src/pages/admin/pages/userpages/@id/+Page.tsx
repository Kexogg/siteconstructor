import AdminPageContainer from "../../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import {useData} from "vike-react/useData";
import {Data} from "./+data";
import AdminTable from "../../../../../components/Admin/AdminTable/AdminTable";
import Button from "../../../../../components/Button/Button";
import AdminEditorSection from "../../../../../components/Admin/AdminEditor/AdminEditorSection";
import AdminEditorItem from "../../../../../components/Admin/AdminEditor/AdminEditorItem";
import Input from "../../../../../components/Input/Input";
import {navigate, reload} from "vike/client/router";
import Dialog from "../../../../../components/Dialog/Dialog";
import {useState} from "react";
import {usePageContext} from "vike-react/usePageContext";
import {SubmitHandler, useForm} from "react-hook-form";
import Select from "../../../../../components/Select/Select";
import {Block, BlockType} from "../../../../../types/blocks";
import {createBlock, deleteBlock} from "../../../../../api/block";
import {deletePage, updatePage} from "../../../../../api/page";
import BaseBlock from "../../../../../components/blocks/BaseBlock/BaseBlock";
import AdminPreview from "../../../../../components/Admin/AdminPreview/AdminPreview";
import {useInlineCustomCss} from "../../../../../hooks/useInlineCustomCss";

const Page = () => {
    const data = useData<Data>();
    const context = usePageContext();
    const [dialogOpen, setDialogOpen] = useState(false);

    interface FormData {
        name: string;
        address: string;
        description: string;
        num: number;
        isEnabled: boolean;
    }

    const {register, handleSubmit} = useForm<FormData>({values: data.page});
    const onSubmit: SubmitHandler<FormData> = async (formData) => {
        await updatePage(data.page.id.toString(), formData, context.token).then(reload);
    };

    return (
        <>
            <AdminPageContainer title={`Страница "${data.page.name}"`}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <AdminEditorSection title={"Настройки страницы"}>
                        <AdminEditorItem label={"Название"}><Input {...register("name")} /></AdminEditorItem>
                        <AdminEditorItem label={"Адрес"}><Input  {...register("address")} /></AdminEditorItem>
                        <AdminEditorItem label={"Описание"}><Input {...register("description")} /></AdminEditorItem>
                        <AdminEditorItem label={"Порядок"}><Input {...register("num")} /></AdminEditorItem>
                        <AdminEditorItem label={"Публиковать"}><Input
                            type="checkbox" {...register("isEnabled")}/></AdminEditorItem>
                    </AdminEditorSection>
                    <div className={"flex gap-3"}>
                        <Button type="submit">Сохранить</Button>
                        <Button outline onClick={() => deletePage(data.page.id.toString(), context.token).then(async () => await navigate("/admin/userpages"))}>Удалить</Button>
                    </div>
                </form>
                <h2 className={"text-xl font-bold my-3"}>Блоки</h2>
                <div className={"flex flex-col"}>
                    <AdminTable
                        data={data.page.blocks}
                        columns={[
                            {key: "id", title: "ID", isNarrow: true},
                            {key: "num", title: "Позиция", isNarrow: true},
                            {key: "type", title: "Тип", isNarrow: true},
                            {key: "name", title: "Название"},
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
                                deleteBlock(id, data.page.id.toString(), context.token).then(reload);
                            },
                        }}
                    />
                    <div className="ms-auto mt-3 w-fit">
                        <span className={"mr-3"}>
                          Количество элементов: {data.page.blocks.length}
                        </span>
                        <Button onClick={() => setDialogOpen(true)} outline>
                            Добавить блок
                        </Button>
                    </div>
                </div>
                <div className={'my-3'}>
                    <AdminPreview title={'Предпросмотр страницы'}>
                        <div style={useInlineCustomCss(data.site.styles)}>
                            {data.page.blocks.filter(b => b.isEnabled === true).map((block: Block) => (
                                <BaseBlock key={block.num} block={block} />
                            ))}
                        </div>
                    </AdminPreview>
                </div>
            </AdminPageContainer>
            <NewBlockDialog
                onAdd={(formData) =>
                    createBlock(
                        {
                            name: formData.name,
                            type: formData.type as BlockType,
                            jsonb: null,
                            isEnabled: false,
                        },
                        data.page.id.toString(),
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

const NewBlockDialog = ({open, onClose, onAdd}: NewBlockDialogProps) => {
    const {register, handleSubmit, reset} = useForm<INewBlockDialogProps>();

    const onSubmit = (data: INewBlockDialogProps) => {
        onAdd(data);
        reset();
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} title={"Добавить блок"}>
            <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-3"}>
                <Input required placeholder={"Название"} {...register("name")} />
                <Select required {...register("type")}>
                    <option disabled value={""}>Выберите тип блока</option>
                    {Object.values(BlockType).map((key) => (<option key={key} value={key}>{key}</option>))}
                </Select>
                <Button type="submit">Добавить</Button>
            </form>
        </Dialog>
    );
};

export default Page;
