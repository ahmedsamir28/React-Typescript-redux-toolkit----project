import { Link } from "react-router-dom"
import Button from "../../UI-items/Button"
import Image from "../../UI-items/Image"
import { IData } from "../../Interface/Index"
import { descriptionSlicer } from "../../UI-items/description"
import { useAppDispatch } from "../../Redux/store"
import { addToCart } from "../../Redux/Slice/cartSlice"
import { Toaster } from "react-hot-toast"

interface dataProps {
    data: IData,
    isLoading: boolean,
}

const ProductCard = ({ data, isLoading }: dataProps) => {
    const dispatch = useAppDispatch();


    const addToCartHandler = () => { 
        dispatch(addToCart(data))
    }

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
                            url={data.attributes.thumbnail.data?.attributes.formats.medium.url}
                            alt="food"
                            className="w-full h-96 lg:object-cover rounded-t-lg"
                        />

                    </Link>
                    <div className="p-3 bg-base-300  ">
                        <div className="h-32 ">
                            <h2 className="card-title">{data.attributes.title}</h2>
                            <p>{descriptionSlicer(data.attributes.description, 50)}</p>
                        </div>


                        <div className="flex items-center justify-between">
                            <span className="text-amber-600">
                                $ {data.attributes.price}
                            </span>
                            <div className="card-actions justify-end">
                                <Button
                                    onClick={addToCartHandler}
                                    className="bg-warning hover:bg-amber-500 font-medium capitalize px-3 py-2">
                                    buy now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            <Toaster />

        </div>
    )
}

export default ProductCard