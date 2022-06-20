import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RouteNames } from '../routes/routes';

export const authAdminAPI = createApi({
    reducerPath: "AuthAdminAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://megamall-api-dev.x.la/auth/login?roles=admin"
    }),
    endpoints: (build) => ({
        loginAdmin: build.mutation({
            query: (body: { username: string; password: string }) => {
                return {
                    url: RouteNames.LOGIN_ADMIN,
                    method: "post",
                    body,
                }
            },
        })
    })
})

