import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import loginSlice from './Slice/loginSlice'
import foodsSlice  from './Slice/foodsSlice'
import productsReducer from './Slice/productsSlice'
import { dataSlice } from './Query/dataSlice'
import registerSlice from './Slice/registerSlice'
import { categoriesSlice }  from './Query/categoriesSlice'

export const store = configureStore({
    reducer: {
        login:loginSlice,
        register:registerSlice,
        foods:foodsSlice,
        products:productsReducer,
        [dataSlice.reducerPath]: dataSlice.reducer,
        [categoriesSlice.reducerPath]: categoriesSlice.reducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dataSlice.middleware,categoriesSlice.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()