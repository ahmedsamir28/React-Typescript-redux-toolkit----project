import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IData } from '../../Interface/Index';
import { addItemToShoppingCart } from '../../Utils';
import toast from 'react-hot-toast';

interface CartState {
    cartProducts: IData[];
}

const initialState: CartState = {
    cartProducts: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IData>) => {
            // [...state.cartProducts, action.payload];
            state.cartProducts = addItemToShoppingCart(action.payload , state.cartProducts)
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.cartProducts = state.cartProducts.filter(item =>item.id !== action.payload)
            toast.success("The product has been deleted from the shopping cart", {
                position: "bottom-center",
                duration: 1500,
                style: {
                    backgroundColor: "black",
                    color: "white",
                    width: "fit-content",
                },
            });
        },
        clearCart: state => {
            state.cartProducts = []
            toast("All products have been deleted from the shopping cart", {
                position: "bottom-center",
                duration: 1500,
                style: {
                    backgroundColor: "orange",
                    color: "white",
                    width: "fit-content",
                },
            });
        },
    },
});

export const { addToCart , removeFromCart ,clearCart} = cartSlice.actions;
export const selectCart = ( {cart}: RootState ) => cart;
export default cartSlice.reducer;
