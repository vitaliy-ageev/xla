import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IStatus } from "../models/IOpportunity"
import { API_BASE_URL } from '../utils/const'

export const statusAPI = createApi({
    reducerPath: 'StatusAPI',
    baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/projects` }),
    tagTypes: ['Status'],
    endpoints: (build) => ({
        fetchAllStatuses: build.query<IStatus[], void>({
            query: () => ({
                url: '/statuses'
            }),
            providesTags: result => ['Status'],
        }),
    })
})