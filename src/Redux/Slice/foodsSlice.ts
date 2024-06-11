import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IData } from '../../Interface/Index'


// Define a type for the slice state
interface foodsState {
    foodItems: IData[]
}

// Define the initial state using that type
const initialState: foodsState = {
    foodItems: [],
}

export const foodsSlice = createSlice({
    name: "foods",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`

    },
})

// export const { incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default foodsSlice.reducer