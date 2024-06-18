import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IData } from '../../Interface/Index';
import axiosInstance from '../../Config/AxiosConfig';
import { RootState } from '../store';

// Define a type for the slice state
interface ProductsState {
    loading: boolean;
    data: IData[];
    error: string | null;
}

// Define the initial state using that type
const initialState: ProductsState = {
    loading: true,
    data: [],
    error: null,
};

// Create async thunk for fetching products list
export const getProductsList = createAsyncThunk('products/getProductsList',async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
        try {
            const {data} = await axiosInstance.get('/products?limit=10&skip=10&select=title,description,price,thumbnail');
            return data;
        } catch (error) {
            console.error('API error:', error);
            return rejectWithValue(error);
        }
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProductsList.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProductsList.fulfilled, (state, action: PayloadAction<IData[]>) => {
                state.loading = false;
                state.data = action.payload;
                console.log('Fulfilled action payload:', action.payload);
            })
            .addCase(getProductsList.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.error = action.payload as string;
                console.error('Rejected action payload:', action.payload);
            });
    },
});

export const productsSelector = ({products} : RootState)=> products
export default productsSlice.reducer;
