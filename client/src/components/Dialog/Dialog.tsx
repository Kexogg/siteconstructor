import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";

type DialogProps = {
    open: boolean;
    title?: string;
    onClose?: () => void;
    children?: React.ReactNode;
}

const Dialog = ({open, title, onClose, children}: DialogProps) => {
    return (
        <dialog className={'bg-black/50 w-full h-full top-0 left-0'} open={open} onClose={onClose}>
            <div className={'flex h-full'}>
                <div className={'w-screen sm:w-72 md:w-96 m-auto p-3'}>
                    {/*Actual dialog*/}
                    <div className={'bg-white p-3 rounded-lg'}>
                        <div className={'flex justify-center relative items-center'}>
                            {title && <h2 className="text-xl font-bold px-3">{title}</h2>}
                            {onClose && <button className={'absolute px-1 right-0 top-0 text-xl text-neutral-600'}
                                                onClick={onClose}>
                                <FontAwesomeIcon icon={fas.faXmark}/>
                            </button>}
                        </div>
                        <div className={'p-3 max-h-96 overflow-y-auto'}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    )
};

export default Dialog;
