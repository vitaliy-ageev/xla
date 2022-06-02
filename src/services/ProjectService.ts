import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IFetchProject, IProject, IFAQ, IUpdates } from "../models/IProject"

export const projectAPI = createApi({
    reducerPath: 'ProjectAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://megamall-api-dev.x.la' }),
    tagTypes: ['Project'],
    endpoints: (build) => ({
        fetchAllProjects: build.query<IFetchProject, number>({
            query: (limit: number = 9) => ({
                url: '/projects',
                params: {
                    limit: limit
                }
            }),
            providesTags: result => ['Project'],
        }),
        fetchOneProject: build.query<IProject, string>({
            query: (id: string) => ({
                url: `/projects/${id}`,
                params: {
                    id: id
                }
            }),
            providesTags: result => ['Project'],
        }),
        fetchProjectFAQ: build.query<IFAQ[], string>({
            query: (id: string) => ({
                url: `/projects/${id}/faqs`,
                params: {
                    id: id
                }
            })
        }),
        fetchProjectUpdates: build.query<IUpdates[], string>({
            query: (id: string) => ({
                url: `/projects/${id}/updates`,
                params: {
                    id: id
                }
            })
        })
    })
})