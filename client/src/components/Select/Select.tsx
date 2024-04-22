import React, {SelectHTMLAttributes} from 'react';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    children: React.ReactNode;
}

const Select = ({children, ...props}: SelectProps) => {
    return (
        <select {...props} className="shadow-inner rounded px-2 py-1 border bg-white h-8">
            {children}
        </select>
    );
};

export default Select;
