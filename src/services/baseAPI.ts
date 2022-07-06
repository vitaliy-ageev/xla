import { createApi, fetchBaseQuery, FetchBaseQueryError, FetchArgs, BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { setAuth, setLogOut } from '../store/reducers/userSlice/userSlice';
import { RootState } from '../store/store';
import { API_BASE_URL } from '../utils/const'

const baseQuery = fetchBaseQuery({
    baseUrl: API_BASE_URL,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const access_token: any = (getState() as RootState).userReducer.access_token
        if (access_token) {
            headers.set('Authorization', `Bearer ${access_token}`)
        }
        return headers
    }
})


const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error && result?.error?.status === 401) {
        const refresh_token: any = (api.getState() as RootState).userReducer.refresh_token
        if (refresh_token) {
            const role: any = (api.getState() as RootState).userReducer.role
            if (role !== null) {
                const refreshResult: any = await baseQuery({ url: '/auth/refresh?roles=' + `${role}`, method: 'post', body: { "refresh_token": refresh_token } }, api, extraOptions)
                if (refreshResult?.data) {
                    const user_id: any = (api.getState() as RootState).userReducer.user_id
                    const access_token: any = (api.getState() as RootState).userReducer.access_token
                    api.dispatch(setAuth({ ...refreshResult.data, user_id, access_token }))
                    result = await baseQuery(args, api, extraOptions)
                } else {
                    api.dispatch(setLogOut())
                }
            } else {
                api.dispatch(setLogOut())
            }
        }
    }
    return result
}

export const baseAPI = createApi({
    reducerPath: "baseAPI",
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({})
})


