import { InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    
}

const Input = ({...rest}:IProps) => {
    return (
        <input  className="input input-bordered input-warning w-full max-w-xs" {...rest}/>
    )
}

export default Input
