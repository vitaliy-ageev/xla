import { baseAPI } from "./baseAPI"

export const authAdmin = baseAPI.injectEndpoints({
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

export const { useLoginAdminMutation } = authAdmin

export const authUser = baseAPI.injectEndpoints({
    endpoints: (build) => ({
        loginUser: build.mutation({
            query: (body: { username: string, password: string }) => {
                return {
                    url: '/auth/login?roles=user',
                    method: "post",
                    body
                }
            },
        }),
    })
})

export const { useLoginUserMutation } = authUser