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
    refetchOnReconnect:true,
    refetchOnMountOrArgChange:true,
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => {
                return {
                    url: '/api/products?populate=*'
                }
            },
            providesTags: ['Data'],
        }),
        getDataById: builder.query({
            query: (id) => `/api/products/${id}?populate=*`,
        }),
        postData: builder.mutation({
            query: (formData: FormData) => ({
                url: '/api/products',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['Data'],

        }),
        deleteData: builder.mutation({
            query: (id) => ({
                url: `/api/products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Data'],

        }),
    }),
});

export const { useGetDataQuery, useGetDataByIdQuery ,usePostDataMutation ,useDeleteDataMutation} = dataSlice;
