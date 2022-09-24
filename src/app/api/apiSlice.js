import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500', }),
    endpoints: builder => ({
        getSneakers: builder.query({
            query: () => '/sneakers'
        }),
        getInfo: builder.query({
            query: () => '/description'
        })
    })
})

export const { useGetSneakersQuery, useGetInfoQuery } = apiSlice