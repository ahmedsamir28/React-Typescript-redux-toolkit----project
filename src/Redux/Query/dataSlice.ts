import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const dataSlice = createApi({
    reducerPath: 'api',
    tagTypes: ['Data'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337' }),
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
    }),
});

export const { useGetDataQuery , useGetDataByIdQuery } = dataSlice;
