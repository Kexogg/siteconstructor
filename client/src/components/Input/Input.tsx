import {InputHTMLAttributes} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({...props}: InputProps) => {
    return (
        <input {...props} className="shadow-inner rounded px-2 py-1 border"/>
    );
};

export default Input;