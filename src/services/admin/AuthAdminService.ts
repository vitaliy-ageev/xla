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
    })
})

export const { useLoginAdminMutation } = authAdminAPI