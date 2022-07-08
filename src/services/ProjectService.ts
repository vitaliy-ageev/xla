import { IFetchProject, IProject, IFAQ, IUpdates, ICreateProject, IUpdateProject, ImagesUpload, FileUpload } from "../models/IProject"
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
        updateProject: build.mutation<IUpdateProject, IUpdateProject>({
            query: (IUpdateProject) => {
                return {
                    url: `/projects/${IUpdateProject.projectID}`,
                    method: 'PATCH',
                    body: IUpdateProject.project
                }
            }
        }),
        uploadImages: build.mutation<FileUpload, ImagesUpload>({
            query: (ImagesUpload) => {
                return {
                    url: `/projects/images/upload?source=${ImagesUpload.provider}`,
                    method: 'post',
                    body: ImagesUpload.file
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