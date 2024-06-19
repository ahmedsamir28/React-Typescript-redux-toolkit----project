import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../Config/AxiosConfig';


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


// Create async thunk for user register
export const register = createAsyncThunk('auth/login', async (credentials: { username: string; email: string; password: string }, thunkAPI) => {
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
