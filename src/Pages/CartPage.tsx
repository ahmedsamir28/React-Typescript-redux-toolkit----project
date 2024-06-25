import { useSelector } from "react-redux";
import { clearCart, removeFromCart, selectCart } from "../Redux/Slice/cartSlice";
import { useAppDispatch } from "../Redux/store";
import { Toaster } from "react-hot-toast";
import Button from "../UI-items/Button";

const CartPage = () => {
    const { cartProducts } = useSelector(selectCart);
    const dispatch = useAppDispatch();




    return (
        <div style={{ minHeight: '800px' }}>

            {
                cartProducts.length ? (
                    <div>
                        <Button onClick={() => dispatch(clearCart())} className="bg-red-500 hover:bg-red-600 text-base-300 font-bold capitalize px-3 py-2 my-5 ">
                            Clear All
                        </Button>
                        <div className="overflow-x-auto border-2 rounded-lg border-base-300 mb-10" >

                            <table className="table ">
                                {/* head */}
                                <thead>
                                    <tr className="text-lg">
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {cartProducts.map(item => (
                                        <tr key={item.id}>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle border-2 border-base-300 w-12 h-12">
                                                            <img src={item.attributes.thumbnail.data.attributes.formats.medium.url} alt={item.attributes.title} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{item.attributes.title}</td>
                                            <td>${item.attributes.price}</td>
                                            <td>{item.quantity}</td>
                                            <th>
                                                <button onClick={() => dispatch(removeFromCart(item.id))} className="btn btn-error btn-xs">Delete</button>
                                            </th>
                                        </tr>
                                    ))}
                                </tbody>
                                {/* foot */}
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className="my-20 text-center">No products in shopping cart</div>
                )
            }
            <Toaster />

        </div>
    );
}

export default CartPage;
