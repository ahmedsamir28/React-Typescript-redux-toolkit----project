import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import counterSlice from './Slice/authSlice'
import foodsSlice  from './Slice/foodsSlice'
import productsSlice  from './Slice/productsSlice'

export const store = configureStore({
    reducer: {
        counter:counterSlice,
        foods:foodsSlice,
        products:productsSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()