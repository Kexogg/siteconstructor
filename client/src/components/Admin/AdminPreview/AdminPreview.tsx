import {ReactNode, SyntheticEvent, useState} from 'react';

type AdminPreviewProps = {
    children: ReactNode,
    title: string | number
}

const AdminPreview = ({children, title}: AdminPreviewProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (e: SyntheticEvent) => {
        setIsOpen((e.target as HTMLDetailsElement).open);
    };

    return (
        <details onToggle={handleToggle} className={'bg-white outline outline-1 outline-primary-100 rounded-xl open:rounded-b-none'}>
            <summary className={'p-3 bg-white'}>{title}</summary>
            {isOpen && <div className={'max-h-96 overflow-y-scroll relative'}>
                {children}
            </div>}
        </details>
    );
};

export default AdminPreview;
