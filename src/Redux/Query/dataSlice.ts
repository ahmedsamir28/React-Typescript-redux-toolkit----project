import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:1337',
    prepareHeaders: (headers) => {

    const storageKey = "user";
    const userDataString = localStorage.getItem(storageKey);
    const userData = userDataString ? JSON.parse(userDataString) : null;
    const token =userData.jwt;
    
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});


export const dataSlice = createApi({
    reducerPath: 'dataApi',
    tagTypes: ['Data'],
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => {
                return {
                    url: '/api/products?populate=*'
                }
            },
        }),
        getDataById: builder.query({
            query: (id) => `/api/products/${id}?populate=*`,
        }),
        postData: builder.mutation({
            query: (formData: FormData) => ({
                url: '/products',
                method: 'POST',
                body: formData,
            }),
        }),
    }),
});

export const { useGetDataQuery, useGetDataByIdQuery ,usePostDataMutation} = dataSlice;
