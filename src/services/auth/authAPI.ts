import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: "https://megamall-api-dev.x.la",
})

export const authAPI = createApi({
    reducerPath: "authAPI",
    baseQuery: baseQuery,
    endpoints: (build) => ({})
})