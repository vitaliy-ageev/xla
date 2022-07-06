import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../utils/const'

const baseQuery = fetchBaseQuery({
    baseUrl: API_BASE_URL,
})

export const authAPI = createApi({
    reducerPath: "authAPI",
    baseQuery: baseQuery,
    endpoints: (build) => ({})
})