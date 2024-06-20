import { ReactNode } from "react"

interface IProps {
    children: ReactNode,


}

const Header = ({ children }: IProps) => {
    return (
        <h1 className="capitalize text-4xl font-semibold">{children}</h1>

    )
}

export default Header