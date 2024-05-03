import {InputHTMLAttributes} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({...props}: InputProps) => {
    return (
        <input {...props} className="shadow-inner rounded px-2 py-1 border bg-white h-8 disabled:text-neutral-400"/>
    );
};

export default Input;
