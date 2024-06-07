import Button from "../../UI-items/Button"
import Image from "../../UI-items/Image"

interface IProps { }

const DetailsCart = () => {
    return (
        <div className="container mx-auto p-4 bg-base-200 border-2 border-base-300 my-10 rounded-lg">
            <div className="flex flex-col md:flex-row items-center md:space-x-4">
                {/* Product Image */}
                <div className="flex-shrink-0">
                    <Image
                        url="https://via.placeholder.com/400"
                        alt="alt title"
                        className="w-full md:w-96 object-cover rounded-lg"
                    />
                </div>

                {/* Product Details */}
                <div className="mt-4 md:mt-0 flex flex-col items-start justify-between gap-3">
                    <h1 className="text-2xl font-bold">title of project asafsa</h1>
                    <h5>category</h5>
                    <p className="mt-2 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aut uisquam doloremque. Reprehenderit!
                    </p>
                    <p className="text-xl font-semibold text-amber-600">$ 5000</p>

                    {/* Add to Cart Button */}
                    <Button className="bg-warning hover:bg-amber-500 capitalize px-3 py-2 font-bold">
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DetailsCart