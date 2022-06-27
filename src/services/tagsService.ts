import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IJobType } from "../models/IOpportunity"

export const jobTypeAPI = createApi({
    reducerPath: 'JobTypeAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://megamall-api-dev.x.la/projects/opportunities' }),
    tagTypes: ['JobType'],
    endpoints: (build) => ({
        fetchAllStatuses: build.query<IJobType, void>({
            query: () => ({
                url: '/job_types'
            }),
            providesTags: result => ['JobType'],
        }),
    })
})