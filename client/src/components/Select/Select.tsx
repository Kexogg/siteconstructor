import React, {SelectHTMLAttributes} from 'react';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    children: React.ReactNode;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({children, ...props}, ref) => {
    return (
        <select ref={ref} {...props} className="shadow-inner rounded px-2 py-1 border bg-white h-8 disabled:text-neutral-400">
            {children}
        </select>
    );
});
Select.displayName = 'Select';

export default Select;
