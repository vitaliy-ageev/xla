import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IFetchAllTags, ITag } from "../models/IProject"
import { CreateTag, UpdateTag } from "../models/ITag"
import { baseAPI } from "./baseAPI"

export const tagAPI = baseAPI.injectEndpoints({
    endpoints: (build) => ({
        fetchAllTags: build.query<IFetchAllTags, number>({
            query: (limit: number = 10) => ({
                url: '/projects/tags',
                params: {
                    limit: limit
                }
            }),
            providesTags: result => ['Tags'],
        }),
        fetchOneTag: build.query<CreateTag, string>({
            query: (id: string) => ({
                url: `/projects/tags/${id}`,
            }),
            providesTags: result => ['Tags'],
        }),
        createTag: build.mutation({
            query: (body: CreateTag) => {
                return {
                    url: '/projects/tags',
                    method: 'post',
                    body
                }
            },
            invalidatesTags: ['Tags']
        }),
        updateTag: build.mutation<UpdateTag, UpdateTag>({
            query: (UpdateTag) => {
                return {
                    url: `/projects/tags/${UpdateTag.id}`,
                    method: 'PATCH',
                    body: UpdateTag.tag
                }
            },
            invalidatesTags: ['Tags']
        }),
        deleteTag: build.mutation({
            query: (id: string) => {
                return {
                    url: `/projects/tags/${id}`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: ['Tags']
        }),
    }),
})

export const { useFetchAllTagsQuery, useFetchOneTagQuery, useCreateTagMutation, useUpdateTagMutation, useDeleteTagMutation } = tagAPI