import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IWorkingMode } from "../models/IOpportunity"

export const workingModeAPI = createApi({
    reducerPath: 'WorkingModeAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://megamall-api-dev.x.la/projects/opportunities' }),
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