import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IFethOpportunity, IOpportunity, ISkills, paramsQuery } from "../models/IOpportunity"

export const opportunityAPI = createApi({
    reducerPath: 'OpportunityAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://megamall-api-dev.x.la/projects/' }),
    tagTypes: ['Opportunity'],
    endpoints: (build) => ({
        fetchAllOpportunities: build.query<IFethOpportunity, paramsQuery>({
            query: (paramsQuery) => ({
                url: '/opportunities',
                params: {
                    limit: paramsQuery.limit,
                    offset: paramsQuery.offset
                }
            }),
            providesTags: result => ['Opportunity'],
        }),
        fetchOneOpportunity: build.query<IOpportunity, string>({
            query: (id: string) => ({
                url: `/opportunities/${id}`,
                params: {
                    id: id
                }
            }),
            providesTags: result => ['Opportunity'],
        }),
        fetchSkillsOpportunity: build.query<ISkills, string>({
            query: (id: string) => ({
                url: `/opportunities/${id}/skills`,
                params: {
                    id: id
                }
            }),
            providesTags: result => ['Opportunity'],
        }),
        fetchAllProjectOpportunities: build.query<IFethOpportunity, string>({
            query: (id: string) => ({
                url: `/opportunities?project_id=${id}`
            }),
            providesTags: result => ['Opportunity']
        })
    })
})