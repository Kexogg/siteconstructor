import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const UserButton = ({children, ...props}: ButtonProps) => {
    return (
        <button className="transition-colors bg-user-accent text-user-small hover:brightness-105 text-white font-bold py-2 px-3 rounded-user" {...props}>
            {children}
        </button>
    );
};

export default UserButton;
