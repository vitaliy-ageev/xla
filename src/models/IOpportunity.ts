interface IWorkingMode {
    id: number,
    key: string,
    name: string
}

interface IJobType {
    id: number,
    key: string,
    name: string
}

interface IStatus {
    id: number,
    key: string,
    name: string
}

interface IProject {
    id: number,
    name: string,
    url: string | null,
    logo_url: string,
    images_url: string,
    status: IStatus
}

interface IBenefit {
    description: string,
    order: number
}

interface IOptional {
    description: string,
    order: number
}

interface IProfile {
    description: string,
    order: number
}

export interface ISkills {
    benefit: IBenefit[],
    optional: IOptional[],
    profile: IProfile[],
}

export interface IOpportunity {
    id: number,
    name: string,
    description: string,
    logo_url: string,
    project: IProject,
    job_type: IJobType,
    working_mode: IWorkingMode,
    location: string | null,
    typeform_popup: string | null,
    created_at: string
}

export interface IFethOpportunity {
    limit: number,
    offset: number,
    total: number,
    opportunities: IOpportunity[]
}