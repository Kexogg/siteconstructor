import {WithId} from "../../../types/types";
import {ReactNode} from "react";

type AdminTableProps<T> = {
    data: WithId<T>[];
    columns: {
        key: keyof T;
        title: string;
        isNarrow?: boolean;
        render?: (value: T[keyof T]) => ReactNode;
    }[];
    actions: {
        edit: (id: string) => void;
        delete: (id: string) => void;
        drag?: (id: string, newIndex: number) => void;
    };
}

const AdminTable = <T, >({data, columns, actions}: AdminTableProps<T>) => {
    return (
        <table className={'table grow table-auto border border-collapse'}>
            <thead>
            <tr className={'border-b bg-primary-200'}>
                {columns.map(column => (
                    <th className={`border p-1 ${column.isNarrow ? 'w-min' : ''}`}
                        key={column.key.toString()}>{column.title}</th>
                ))}
                <th></th>
            </tr>
            </thead>
            <tbody>
            {data.map(row => (
                <tr key={row.id} className={'hover:bg-primary-100/50 border-b'}>
                    {columns.map(column => (
                        <td className={`border p-1 ${column.isNarrow ? 'w-min' : ''}`}
                            key={column.key.toString()}>
                            {column.render ? column.render(row[column.key]) : row[column.key] as ReactNode}
                        </td>
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