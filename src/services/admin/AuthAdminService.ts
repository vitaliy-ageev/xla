import { adminAPI } from "./AdminService"

export const authAdminAPI = adminAPI.injectEndpoints({
    endpoints: (build) => ({
        loginAdmin: build.mutation({
            query: (body: { username: string, password: string }) => {
                return {
                    url: '/auth/login?roles=admin',
                    method: "post",
                    credentials: 'include',
                    body
                }
            },
        }),
        getProfile: build.query({
            query: () => {
                url: "/auth/me"
            }
        }),
    })
})

export const { useLoginAdminMutation } = authAdminAPI