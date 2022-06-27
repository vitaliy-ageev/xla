import { ICreateProjectAdmin } from "../../models/IProject"
import { userAPI } from "./userAPI"

export const adminService = userAPI.injectEndpoints({
    endpoints: (build) => ({
        logOutAdmin: build.mutation<void, void>({
            query: () => {
                return {
                    url: '/auth/logout',
                    method: 'post'
                }
            }
        }),
        fetchAdminProfile: build.query<void, void>({
            query: () => ({
                url: '/profile/me'
            })
        }),
        createProject: build.mutation<ICreateProjectAdmin, ICreateProjectAdmin>({
            query: () => {
                return {
                    url: '/projects/create',
                    method: 'post'
                }
            }
        }),
    })
})

export const { useLogOutAdminMutation, useFetchAdminProfileQuery, useCreateProjectMutation } = adminService