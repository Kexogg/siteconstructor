import {InputHTMLAttributes, forwardRef} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({...props}, ref) => {
    return (
        <input ref={ref} {...props}
               className="shadow-inner rounded px-2 py-1 border bg-white h-8 disabled:text-neutral-400"/>
    );
});
Input.displayName = 'Input';

export default Input;
