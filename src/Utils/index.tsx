import toast from "react-hot-toast";
import { IData } from "../Interface/Index";

export const addItemToShoppingCart = (cartItem:IData, shoppingCartItems: IData[]) => {
    const existsItem = shoppingCartItems.find(item => item.id === cartItem.id)
    if (existsItem) {
        toast("This item already exists , the quantity will be increased", {
            position: "bottom-center",
            duration: 1500,
            style: {
                backgroundColor: "orange",
                color: "white",
                width: "fit-content",
            },
        });
return shoppingCartItems.map (item => item.id === cartItem.id ? {...item , quantity : item.quantity + 1} : item)
    }
    toast.success("Added to your cart", {
        position: "bottom-center",
        duration: 1500,
        style: {
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
        },
    });
    return [...shoppingCartItems,{...cartItem , quantity: 1}]
    
}