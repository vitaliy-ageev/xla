import { createApi, fetchBaseQuery, FetchBaseQueryError, FetchArgs, BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { setLogOutAdmin, setAuthAdmin } from '../../store/reducers/adminSlice/adminSlice';
import { RootState } from '../../store/store';

const baseQuery = fetchBaseQuery({
    baseUrl: "https://megamall-api-dev.x.la",
    // credentials: 'include',
    // prepareHeaders: (headers, { getState }) => {
    //     const access_token: any = (getState() as RootState).adminReducer.access_token
    //     if (access_token) {
    //         headers.set('Authorization', `Bearer ${access_token}`)
    //     }
    //     return headers
    // }
})

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error && result?.error?.status === 401) {
        const refresh_token: any = (api.getState() as RootState).adminReducer.refresh_token
        if (refresh_token) {
            console.log("refresh_token", refresh_token)
            const refreshResult: any = await baseQuery({ url: '/auth/refresh?roles=admin', method: 'POST', body: { "refresh_token": refresh_token } }, api, extraOptions)
            if (refreshResult?.data) {
                const user_id: any = (api.getState() as RootState).adminReducer.user_id
                const access_token: any = (api.getState() as RootState).adminReducer.access_token
                api.dispatch(setAuthAdmin({ ...refreshResult.data, user_id, access_token }))
                result = await baseQuery(args, api, extraOptions)
            } else {
                api.dispatch(setLogOutAdmin())
            }
        }
    }
    return result
}

export const adminAPI = createApi({
    reducerPath: "AdminAPI",
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({})
})


