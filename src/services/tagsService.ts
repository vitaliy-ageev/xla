import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IJobType } from "../models/IOpportunity"
import { API_BASE_URL } from '../utils/const'

export const jobTypeAPI = createApi({
    reducerPath: 'JobTypeAPI',
    baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/projects/opportunities` }),
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