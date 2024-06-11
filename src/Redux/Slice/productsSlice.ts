import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IData } from '../../Interface/Index'
import axiosInstance from '../../Config/AxiosConfig'


// Define a type for the slice state
interface productsState {
    productsList: IData[]
}
// Define the initial state using that type
const initialState: productsState = {
    productsList: [],
}

const getProductsList = createAsyncThunk("products/getProductsList",async(_, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    //** get Request
    try{
        const {data} =  await axiosInstance.get("/products?limit=10&skip=10&select=title,price,thumbnail")
        console.log(data);
    }catch (error){
        rejectWithValue(error)
    }
})
export const productsSlice = createSlice({
    name: "products",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`

    },
})

// export const { incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default productsSlice.reducer