export interface ISteps {
    id: number,
    title: string,
    description: string,
    isActive: boolean,
}

export interface ICategories {
    id: number,
    name: string
}

export interface ITag {
    id: number,
    name: string
}

export interface IFAQ {
    answer: string,
    order: number,
    question: string
}

export interface IUpdates {
    created_at: string,
    description: string,
    version: string
}

export interface IStatis {
    id: number,
    key: string,
    name: string
}

export interface IProject {
    id: number,
    name: string,
    title: string,
    description: string,
    url: string | null,
    owner_id: number,
    status: IStatis,
    categories: ICategories[],
    tags: ITag[],
    created_at: string,
    start_date: string,
    close_date: string | null,
    forum_url: string,
    typeform_competitor_popup: string,
    typeform_question_popup: string,
    logo_url: string,
    images_url: [],
    opportunities_count: number

}

export interface IFetchProject {
    limit: number,
    offset: number,
    total: number,
    projects: IProject[]
}

export interface ICreateProjectAdmin {
    name: string,
    title: string,
    description: string,
    logo: string,
    images: [],
    categories: ICategories[],
    tags: ITag[],
    url: string,
    forum_url: string,
    typeform_competitor_popup: string,
    typeform_question_popup: string,
    start_date: string,
    close_date: string,
}