import { adminAPI } from "./AdminService"

export const authAdminAPI = adminAPI.injectEndpoints({
    endpoints: (build) => ({
        loginAdmin: build.mutation({
            query: (body: { username: string, password: string }) => {
                return {
                    url: '/auth/login?roles=admin',
                    method: "post",
                    body
                }
            },
        }),
        logOutAdmin: build.mutation<void, void>({
            query: () => {
                return {
                    url: '/auth/logout',
                    method: 'post'
                }
            }
        }),
        fetchProfile: build.query({
            query: () => ({
                url: '/profile/me'
            })
        }),
    })
})

export const { useLoginAdminMutation, useLogOutAdminMutation, useFetchProfileQuery } = authAdminAPI