import { ReactNode } from "react"

interface IProps {
    children: ReactNode,


}

const PageDescription = ({ children }: IProps) => {
    return (
        <h1 className="text-sm mt-2">{children}</h1>

    )
}

export default PageDescription