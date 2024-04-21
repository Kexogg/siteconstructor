import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({children, ...props}: ButtonProps) => {
    return (
        <button className="transition-colors bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-3 rounded" {...props}>
            {children}
        </button>
    );
};

export default Button;
