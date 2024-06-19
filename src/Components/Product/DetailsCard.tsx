import { IData } from "../../Interface/Index";
import Button from "../../UI-items/Button"
import Image from "../../UI-items/Image"

interface dataProps {
    data: IData,
    isLoading: boolean,
}

const DetailsCard = ({ data, isLoading }: dataProps) => {
    console.log("aaa", data);

    return (

        <>
            {
                isLoading ? (<div className="container mx-auto p-4 bg-base-200 border-2 border-base-300 my-10 rounded-lg animate-pulse">
                    <div className="flex flex-col md:flex-row items-center md:space-x-4">
                        <div className="flex-shrink-0 w-full md:w-96 h-64 bg-gray-300 rounded-lg"></div>

                        <div className="mt-4 md:mt-0 flex flex-col items-start justify-between gap-3 w-full">
                            <div className="h-8 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-5 bg-gray-300 rounded w-1/4"></div>
                            <div className="mt-2 h-16 bg-gray-300 rounded w-full"></div>
                            <div className="h-8 bg-gray-300 rounded w-1/4"></div>

                            <div className="bg-warning hover:bg-amber-500 capitalize px-3 py-2 font-bold w-1/2 h-10 rounded"></div>
                        </div>
                    </div>
                </div>
                ) : (<div className="container mx-auto p-4 bg-base-200 border-2 border-base-300 my-10 rounded-lg">
                    <div className="flex flex-col md:flex-row items-center md:space-x-4">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                            <Image
                                url={data.data.attributes.thumbnail.data.attributes.formats.medium.url}
                                alt="alt title"
                                className="w-full md:w-96 object-cover rounded-lg"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="mt-4 md:mt-0 flex flex-col items-start justify-between gap-3">
                            <h1 className="text-2xl font-bold">{data.data.attributes.title}</h1>
                            <h5>{data.data.attributes.category.data.attributes.title}</h5>
                            <p className="mt-2 text-gray-600">
                                {data.data.attributes.description}
                            </p>
                            <p className="text-xl font-semibold text-amber-600">$ {data.data.attributes.price}</p>

                            {/* Add to Cart Button */}
                            <Button className="bg-warning hover:bg-amber-500 capitalize px-3 py-2 font-bold">
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </div>)
            }
        </>

    )
}

export default DetailsCard