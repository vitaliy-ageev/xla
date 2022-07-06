import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IWorkingMode } from "../models/IOpportunity"
import { API_BASE_URL } from '../utils/const'

export const workingModeAPI = createApi({
    reducerPath: 'WorkingModeAPI',
    baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/projects/opportunities` }),
    tagTypes: ['WorkingMode'],
    endpoints: (build) => ({
        fetchAllStatuses: build.query<IWorkingMode, void>({
            query: () => ({
                url: '/working_modes'
            }),
            providesTags: result => ['WorkingMode'],
        }),
    })
})