import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IFetchAllTopics, paramsQuery } from "../models/IForum"
import { API_BASE_URL } from '../utils/const'

export const forumAPI = createApi({
    reducerPath: 'ForumAPI',
    baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/forum` }),
    tagTypes: ['ForumAPI'],
    endpoints: (build) => ({
        fetchAllTopics: build.query<IFetchAllTopics, paramsQuery>({
            query: (paramsQuery) => ({
                url: '/topics',
                params: {
                    limit: paramsQuery.limit,
                    offset: paramsQuery.offset
                }
            }),
            providesTags: result => ['ForumAPI'],
        }),
    })
})

export const { useFetchAllTopicsQuery } = forumAPI