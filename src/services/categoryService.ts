import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IFetchCategories } from "../models/ICategory"

export const categoryAPI = createApi({
    reducerPath: 'categoryAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://megamall-api-dev.x.la/projects' }),
    tagTypes: ['Category'],
    endpoints: (build) => ({
        fetchAllCategories: build.query<IFetchCategories, void>({
            query: () => ({
                url: '/categories'
            }),
            providesTags: result => ['Category'],
        }),
    })
})

export const { useFetchAllCategoriesQuery } = categoryAPI