import { Link } from "react-router-dom"

interface IProps { }

const ProductCard = () => {
    return (
        <div className=" card  bg-base-100 shadow-xl">
            <Link to={"food/4"}>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                    className="w-full lg:object-cover"
                />
            </Link>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>

                <div className="flex items-center justify-between">
                    <span>
                        $ 100
                    </span>
                    <div className="card-actions justify-end">
                        <button className="border-2  btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard