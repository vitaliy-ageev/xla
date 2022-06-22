import { createApi, fetchBaseQuery, FetchBaseQueryError, FetchArgs, BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { useAppSelector } from '../../hooks/hooks';
import { RouteNames } from '../../routes/routes';
import { logOutAdmin, setAuthAdmin } from '../../store/reducers/adminSlice/adminSlice';
import { AppStore } from '../../store/store';

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
        const user_id: any = (getState() as AppStore).adminReducer.user_id
        const refresh_token: any = (getState() as AppStore).adminReducer.refresh_token
        const access_token: any = (getState() as AppStore).adminReducer.access_token
        console.log('access_token', access_token)
        if (access_token) {
            headers.set("Authorization", `Bearer ${access_token}`)
        }
        return headers
    }
})

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (!result?.error) {
        // const [refreshAdmin] = useRefreshAdminMutation()
        const refresh_token: any = (api.getState() as AppStore).adminReducer.refresh_token
        console.log('refresh_token', refresh_token)
        // const refreshResult: any = await baseQuery({ url: '/auth/refresh?role=admin', method: 'POST', body: { refresh_token } }, api, extraOptions)
        // // const refreshResult: any = await refreshAdmin({ refresh_token });
        // if (refreshResult?.data) {
        //     const user_id: any = (api.getState() as RootState).adminReducer.user_id
        //     const access_token: any = (api.getState() as RootState).adminReducer.access_token
        //     api.dispatch(setAuthAdmin({ ...refreshResult.data, user_id, access_token }))
        //     result = await baseQuery(args, api, extraOptions)
        // } else {
        //     api.dispatch(logOutAdmin())
        // }
    }
    return result
}

export const adminAPI = createApi({
    reducerPath: "AdminAPI",
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({})
})


