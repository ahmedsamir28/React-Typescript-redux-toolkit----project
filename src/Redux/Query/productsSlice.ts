import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const productsSlice = createApi({
    reducerPath: 'api',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => { 
                return { 
                    url: '/api/products?populate=*' 
                } 
            },
        }),
    }),
});

export const { useGetProductsQuery } = productsSlice;
