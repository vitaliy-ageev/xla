import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IFethOpportunity, IOpportunity, ISkills } from "../models/IOpportunity"

export const opportunityAPI = createApi({
    reducerPath: 'OpportunityAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://megamall-api-dev.x.la' }),
    tagTypes: ['Opportunity'],
    endpoints: (build) => ({
        fetchAllOpportunities: build.query<IFethOpportunity, number>({
            query: (limit: number = 10) => ({
                url: '/projects/opportunities',
                params: {
                    limit: limit
                }
            }),
            providesTags: result => ['Opportunity'],
        }),
        fetchOneOpportunity: build.query<IOpportunity, string>({
            query: (id: string) => ({
                url: `/projects/opportunities/${id}`,
                params: {
                    id: id
                }
            }),
            providesTags: result => ['Opportunity'],
        }),
        fetchSkillsOpportunity: build.query<ISkills, string>({
            query: (id: string) => ({
                url: `/projects/opportunities/${id}/skills`,
                params: {
                    id: id
                }
            }),
            providesTags: result => ['Opportunity'],
        }),
        fetchAllProjectOpportunities: build.query<IFethOpportunity, string>({
            query: (id: string) => ({
                url: `/projects/opportunities?project_id=${id}`
            }),
            providesTags: result => ['Opportunity']
        })
    })
})