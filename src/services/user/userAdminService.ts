import { ICreateProject } from "../../models/IProject"
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
    })
})

export const { useLogOutAdminMutation, useFetchAdminProfileQuery, } = adminService