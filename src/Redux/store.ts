import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import authSlice from './Slice/authSlice'
import foodsSlice  from './Slice/foodsSlice'
import productsReducer from './Slice/productsSlice'
import { dataSlice } from './Query/dataSlice'

export const store = configureStore({
    reducer: {
        auth:authSlice,
        foods:foodsSlice,
        products:productsReducer,
        [dataSlice.reducerPath]: dataSlice.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dataSlice.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()