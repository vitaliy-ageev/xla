import { IFetchProject, IProject, IFAQ, IUpdates, ICreateProject } from "../models/IProject"
import { baseAPI } from "./baseAPI"

export const projectAPI = baseAPI.injectEndpoints({
    endpoints: (build) => ({
        fetchAllProjects: build.query<IFetchProject, number>({
            query: (limit: number = 9) => ({
                url: '/projects',
                params: {
                    limit: limit
                }
            }),
        }),
        fetchOneProject: build.query<IProject, string>({
            query: (id: string) => ({
                url: `/projects/${id}`,
                params: {
                    id: id
                }
            }),
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
        }),
        createProject: build.mutation({
            query: (body: ICreateProject) => {
                return {
                    url: '/projects/create',
                    method: 'post',
                    body
                }
            }
        }),
        updateProject: build.mutation({
            query: (IUpdateProject) => {
                return {
                    url: `/projects/${IUpdateProject.project_id}`,
                    method: 'patch',
                    body: IUpdateProject.project
                }
            }
        }),
        uploadImages: build.mutation({
            query: (formData) => {
                return {
                    url: '/projects/images/upload?source=create_project_logo',
                    method: 'post',
                    body: formData
                }
            }
        }),
        deleteImages: build.mutation({
            query: (objectKey: string) => {
                return {
                    url: `/projects/images/${objectKey}`,
                    method: 'delete',
                }
            }
        }),
    })
})

export const {
    useFetchAllProjectsQuery,
    useFetchOneProjectQuery,
    useFetchProjectFAQQuery,
    useFetchProjectUpdatesQuery,
    useCreateProjectMutation,
    useUpdateProjectMutation,
    useUploadImagesMutation,
    useDeleteImagesMutation,
} = projectAPI