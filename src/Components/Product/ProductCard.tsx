import { Link } from "react-router-dom"
import Button from "../../UI-items/Button"
import Image from "../../UI-items/Image"
import { IData } from "../../Interface/Index"
import { descriptionSlicer } from "../../UI-items/description"

interface dataProps {
    data: IData,
    isLoading: boolean,
}

const ProductCard = ({ data, isLoading }: dataProps) => {

    return (
        <div>

            {
                isLoading ? (<div className="flex flex-col gap-4 w-52 container">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>) : (<div className=" card  bg-base-200 shadow-xl  border-base-300 rounded-lg border-2">
                    <Link to={`/food/${data.id}`}>
                        <Image
                            url={data.attributes.thumbnail.data.attributes.formats.medium.url}
                            alt="food"
                            className="w-full lg:object-cover rounded-t-lg"
                        />

                    </Link>
                    <div className="card-body bg-base-300">
                        <h2 className="card-title">{data.attributes.title}</h2>
                        <p>{descriptionSlicer(data.attributes.description, 50)}</p>

                        <div className="flex items-center justify-between">
                            <span className="text-amber-600">
                                $ {data.attributes.price}
                            </span>
                            <div className="card-actions justify-end">
                                <Button className="bg-warning hover:bg-amber-500 font-medium capitalize px-3 py-2">
                                    buy now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </div>
    )
}

export default ProductCard