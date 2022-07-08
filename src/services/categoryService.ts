import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { CreateCategory, DeleteCategory, ICategories, IFetchCategories, UpdateCategory } from "../models/ICategory"
import { API_BASE_URL } from '../utils/const'
import { baseAPI } from "./baseAPI"

export const categoryAPI = baseAPI.injectEndpoints({
    endpoints: (build) => ({
        fetchAllCategories: build.query<IFetchCategories, number>({
            query: (limit: number = 10) => ({
                url: '/projects/categories',
                params: {
                    limit: limit
                },
            }),
            providesTags: result => ['Categories'],
        }),
        fetchOneCaregory: build.query<ICategories, string>({
            query: (id: string) => ({
                url: `/projects/categories/${id}`,
                params: {
                    id: id
                }
            }),
        }),
        createCategory: build.mutation({
            query: (body: CreateCategory) => {
                return {
                    url: '/projects/categories',
                    method: 'post',
                    body
                }
            },
            invalidatesTags: ['Categories']
        }),
        updateCategory: build.mutation<UpdateCategory, UpdateCategory>({
            query: (UpdateCategory) => {
                return {
                    url: `/projects/categories/${UpdateCategory.id}`,
                    method: 'PATCH',
                    body: UpdateCategory.category
                }
            },
            invalidatesTags: ['Categories']
        }),
        deleteCategory: build.mutation({
            query: (id: string) => {
                return {
                    url: `/projects/categories/${id}`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: ['Categories']
        }),
    })
})

export const { useFetchAllCategoriesQuery, useCreateCategoryMutation, useFetchOneCaregoryQuery, useUpdateCategoryMutation, useDeleteCategoryMutation } = categoryAPI