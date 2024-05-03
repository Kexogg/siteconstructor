import {WithId} from "../../../types/types";
import {ReactNode} from "react";

type AdminTableProps<T> = {
    data: WithId<T>[];
    columns: {
        key: keyof T;
        title: string;
        isNarrow?: boolean;
    }[];
    actions: {
        edit: (id: string) => void;
        delete: (id: string) => void;
        drag?: (id: string, newIndex: number) => void;
    };
}

const AdminTable = <T,>({data, columns, actions}: AdminTableProps<T>) => {
    return (
        <table className={'table grow table-auto'}>
            <thead>
            <tr className={'border-b'}>
                {columns.map(column => (
                    <th className={`${column.isNarrow ? 'w-min' : ''}`} key={column.key.toString()}>{column.title}</th>
                ))}
                <th className={'hidden'}>Действия</th>
            </tr>
            </thead>
            <tbody>
            {data.map(row => (
                <tr key={row.id} className={'hover:bg-primary-100/50 border-b'}>
                    {columns.map(column => (
                        <td className={`p-1 ${column.isNarrow ? 'w-min' : ''}`} key={column.key.toString()}>{row[column.key] as ReactNode}</td>
                        // Fix this later
                    ))}
                    <td className={'w-min'}>
                        <button onClick={() => actions.edit(row.id)}>E</button>
                        <button onClick={() => actions.delete(row.id)}>D</button>
                        {/*TODO: Add icons*/}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default AdminTable;
