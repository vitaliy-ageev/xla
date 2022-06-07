import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IStatus } from "../models/IOpportunity"

export const statusAPI = createApi({
    reducerPath: 'StatusAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://megamall-api-dev.x.la/projects' }),
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