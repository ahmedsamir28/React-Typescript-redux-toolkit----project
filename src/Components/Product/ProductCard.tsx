import { Link } from "react-router-dom"
import Button from "../../UI-items/Button"
import Image from "../../UI-items/Image"

interface IProps { }

const ProductCard = () => {
    return (
        <div className=" card  bg-base-200 shadow-xl border border-base-300">
            <Link to={"food/4"}>
                <Image
                    url="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg "
                    alt="food"
                    className="w-full lg:object-cover rounded-t-lg"
                />
            </Link>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose ...</p>

                <div className="flex items-center justify-between">
                    <span className="text-amber-600">
                        $ 100
                    </span>
                    <div className="card-actions justify-end">
                        <Button className="bg-warning hover:bg-amber-500 font-medium capitalize px-3 py-2">
                            buy now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard