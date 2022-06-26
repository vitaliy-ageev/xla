import { userAPI } from "./userAPI"

export const userService = userAPI.injectEndpoints({
    endpoints: (build) => ({
        logOutUser: build.mutation<void, void>({
            query: () => {
                return {
                    url: '/auth/logout',
                    method: 'post'
                }
            }
        }),
        fetchUserProfile: build.query<void, void>({
            query: () => ({
                url: '/profile/me'
            })
        }),
    })
})

export const { useLogOutUserMutation, useFetchUserProfileQuery } = userService