import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from '../../Config/AxiosConfig';
import { RootState } from '../store';
import { UserJwtData } from '../../Interface/Index';

// Define a type for the slice state
interface AuthState {
    loading: boolean;
    user: UserJwtData | null; // Replace 'any' with your user data type
    error: string | null;
}

// Get user data from local storage if it exists
const user = localStorage.getItem('user');

// Define the initial state using that type
const initialState: AuthState = {
    loading: false,
    user: user ? JSON.parse(user) : null,
    error: null,
};
// Create async thunk for user login
export const login = createAsyncThunk('auth/login', async (credentials: { identifier: string; password: string }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axiosInstance.post('/auth/local', credentials);
        return response.data; // assuming the token is part of the response data
    } catch (error) {
        console.error('API error:', error);
        return rejectWithValue(error);
    }
}
);

const authSlice = createSlice({
    name: 'auth',
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


export const { logout } = authSlice.actions;

export const authSelector = ({ auth }: RootState) => auth;

export default authSlice.reducer;
