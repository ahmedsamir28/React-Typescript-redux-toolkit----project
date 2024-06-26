import { forwardRef, InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string; // Make className optional
}

const Input = forwardRef<HTMLInputElement, IProps>(({ className = 'w-full', ...rest }, ref) => {
    return (
        <input
            ref={ref}
            className={`input input-bordered input-warning ${className}`}
            {...rest}
        />
    );
});

export default Input;
