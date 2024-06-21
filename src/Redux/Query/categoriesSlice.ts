import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const categoriesSlice = createApi({
    reducerPath: 'categoriesApi',
    tagTypes: ['Category'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337' }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => {
                return {
                    url: '/api/categories?populate=*'
                }
            },
        }),
    }),
});

export const { useGetCategoriesQuery  } = categoriesSlice;
