import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RouteNames } from '../../routes/routes';
import { logOutAdmin, setAuthAdmin } from '../../store/reducers/adminSlice/adminSlice';
import { RootState } from '../../store/store';

interface IResponseData {
    user_id: number,
    access_token: string,
    refresh_token: string,
    expires_in: number,
}


const baseQuery = fetchBaseQuery({
    baseUrl: "https://megamall-api-dev.x.la",
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const access_token = (getState() as RootState).adminReducer.access_token
        if (access_token) {
            headers.set("Authorization", `Bearer ${access_token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.status === 401) {
        const refreshResult: any = await baseQuery('/auth/refresh', api, extraOptions)
        if (refreshResult?.data) {
            const user_id: any = (api.getState() as RootState).adminReducer.user_id
            const access_token: any = (api.getState() as RootState).adminReducer.access_token
            api.dispatch(setAuthAdmin({ ...refreshResult.data, user_id, access_token }))
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOutAdmin())
        }
    }
    return result
}

export const adminAPI = createApi({
    reducerPath: "AdminAPI",
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({})
})


