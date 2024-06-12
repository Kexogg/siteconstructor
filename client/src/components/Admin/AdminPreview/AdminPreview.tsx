import {ReactNode} from 'react';

type AdminPreviewProps = {
    children: ReactNode,
    title: string | number
}

const AdminPreview = ({children, title}: AdminPreviewProps) => {
    return (
        <details className={'bg-white border rounded-xl '}>
            <summary className={'p-3 bg-white'}>{title}</summary>
            <div className={'max-h-96 overflow-y-scroll relative'}>
                {children}
            </div>
        </details>
    );
};

export default AdminPreview;
