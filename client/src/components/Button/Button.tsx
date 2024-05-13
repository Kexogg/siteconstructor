import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    outline?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({children, outline, ...props}: ButtonProps) => {
    return (
        <button className={`transition-colors 
        ${outline ? 'outline outline-1 outline-primary-600 hover:outline-primary-700 hover:text-primary-700 text-primary-600' : 
            'bg-primary-600 hover:bg-primary-700 text-white'} font-semibold py-1.5 px-3 rounded-md`} {...props}>
            {children}
        </button>
    );
};

export default Button;
