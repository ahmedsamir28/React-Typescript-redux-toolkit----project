import { RootState } from '../store';
import { UserJwtData } from '../../Interface/Index';
import { createSlice } from '@reduxjs/toolkit';
import { login } from '../action';

// Define a type for the slice state
interface loginState {
    loading: boolean;
    user: UserJwtData | null; // Replace 'any' with your user data type
    error: string | null;
}

// Get user data from local storage if it exists
const user = localStorage.getItem('user');

// Define the initial state using that type
const initialState: loginState = {
    loading: false,
    user: user ? JSON.parse(user) : null,
    error: null,
};


const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user');
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; // assuming the user data is the response data
                localStorage.setItem('user', JSON.stringify(action.payload));
                console.log('Fulfilled action payload:', action.payload);
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.error = action.payload as string;
                console.error('Rejected action payload:', action.payload);
            });
    },
});


export const { logout } = loginSlice.actions;

export const authSelector = ({ login }: RootState) => login;

export default loginSlice.reducer;
