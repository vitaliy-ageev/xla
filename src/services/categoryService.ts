import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IFetchCategories } from "../models/ICategory"
import { API_BASE_URL } from '../utils/const'

export const categoryAPI = createApi({
    reducerPath: 'categoryAPI',
    baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/projects` }),
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