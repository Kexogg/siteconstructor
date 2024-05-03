import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const UserButton = ({children, ...props}: ButtonProps) => {
    return (
        <button className="transition-colors bg-user-accent hover:brightness-105 text-white font-bold py-2 px-3 rounded" {...props}>
            {children}
        </button>
    );
};

export default UserButton;
