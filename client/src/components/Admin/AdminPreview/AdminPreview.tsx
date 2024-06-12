import {ReactNode} from 'react';

type AdminPreviewProps = {
    children: ReactNode,
    title: string | number
}

const AdminPreview = ({children, title}: AdminPreviewProps) => {
    return (
        <details className={'relative bg-white border rounded-xl open:rounded-b-none max-h-96 overflow-y-scroll'}>
            <summary className={'p-3 sticky top-0 bg-white z-40'}>{title}</summary>
            {children}
        </details>
    );
};

export default AdminPreview;
