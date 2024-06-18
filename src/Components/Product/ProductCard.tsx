import { Link } from "react-router-dom"
import Button from "../../UI-items/Button"
import Image from "../../UI-items/Image"
import { Product } from "../../Interface/Index"
import { descriptionSlicer } from "../../UI-items/description"

interface ProductProps {
    product: Product
}

const ProductCard = ({ product }: ProductProps) => {
    console.log("products", product);


    return (
        <div className=" card  bg-base-200 shadow-xl  border-base-300 rounded-lg border-2">
            <Link to={"food/4"}>
                    <Image
                        url={product.attributes.thumbnail.data.attributes.formats.medium.url}
                        alt="food"
                        className="w-full lg:object-cover rounded-t-lg"
                    />

            </Link>
            <div className="card-body bg-base-300">
                <h2 className="card-title">{product.attributes.title}</h2>
                <p>{descriptionSlicer(product.attributes.description,50)}</p>

                <div className="flex items-center justify-between">
                    <span className="text-amber-600">
                        $ {product.attributes.price}
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