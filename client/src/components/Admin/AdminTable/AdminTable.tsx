import {WithId} from "../../../types/types";
import {ReactNode, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";


type Column<T, K extends keyof T> = {
    key: K;
    title: string;
    isNarrow?: boolean;
    render?: (value: T[K]) => ReactNode | string | number;
}


type AdminTableProps<T> = {
    data: WithId<T>[];
    columns: Column<T, keyof T>[];
    actions: {
        edit: (id: string) => Promise<unknown>;
        delete: (id: string) => Promise<unknown>;
        move?: (id: string, newIndex: number) => Promise<unknown>;
    };
    children?: ReactNode;
}

const AdminTable = <T, >({data, columns, actions, children}: AdminTableProps<T>) => {
    const [loading, setLoading] = useState(false);
    const executeAction = (actionKey: keyof typeof actions, id: string, newIndex?: number) => {
        const action = actions[actionKey];
        if (!action) return;
        setLoading(true);
        //@ts-expect-error FIXME
        const actionResult = newIndex !== undefined ? action(id, newIndex) : action(id);
        actionResult.then(() => setLoading(false));
    }
    return (
        <table className={`table grow table-auto border border-collapse ${loading ? 'opacity-75 animate-pulse' : ''}`}>
            <thead>
            <tr className={'border-b bg-primary-200'}>
                {columns.map(column => (
                    <th className={`border p-1`}
                        key={column.key.toString()}>{column.title}</th>
                ))}
                <th></th>
            </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
                <tr key={row.id} className={'hover:bg-primary-100/50 border-b'}>
                    {columns.map(column => (
                        <td className={`border p-1 ${column.isNarrow ? 'w-0' : 'w-auto'}`}
                            key={column.key.toString()}>
                            {column.render ? column.render(row[column.key]) : row[column.key] as ReactNode}
                        </td>
                    ))}
                    <td className={'w-0 px-3 whitespace-nowrap text-primary-600 text-lg'}>
                        <button onClick={() => executeAction('edit', row.id)}>
                            <FontAwesomeIcon icon={far.faPenToSquare}/>
                        </button>
                        <button className={'transition-colors hover:text-red-700 ms-1'}
                                onClick={() => executeAction('delete', row.id)}>
                            <FontAwesomeIcon icon={fas.faTrash}/>
                        </button>
                        {actions.move && (
                            <>
                                <button className={'disabled:opacity-50'} onClick={() => executeAction('move', row.id, index)}
                                        disabled={index === 0}>
                                    <FontAwesomeIcon icon={fas.faArrowUp}/>
                                </button>
                                <button className={'disabled:opacity-50'}
                                        onClick={() => executeAction('move', row.id, index + 2)}
                                        disabled={index === data.length - 1}>
                                    <FontAwesomeIcon icon={fas.faArrowDown}/>
                                </button>
                            </>)
                        }
                    </td>
                </tr>
            ))}
            {children}
            </tbody>
        </table>
    );
};

export default AdminTable;
