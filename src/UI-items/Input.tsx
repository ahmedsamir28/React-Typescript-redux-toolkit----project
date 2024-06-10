import { forwardRef, InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    
}

const Input =forwardRef<HTMLInputElement,IProps>( ({...rest} ,ref) => {
    return (
        <input
            ref={ref}
            className="input input-bordered input-warning w-full" 
            {...rest}
            />
    )
})

export default Input
