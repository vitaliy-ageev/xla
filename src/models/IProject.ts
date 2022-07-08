export interface ISteps {
    id: number,
    title: string,
    description: string,
    isActive: boolean,
    isValidate: boolean,
}

export interface ICategories {
    id: number,
    key?: string,
    name: string
}

export interface ITag {
    id: number,
    name: string
}

export interface IFetchAllTags {
    limit: number,
    offset: number,
    total: number,
    tags: ITag[]
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
    forum_topic_url: string,
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

export interface ICreateProject {
    name: string | undefined,
    title: string | undefined,
    description: string | undefined,
    logo?: string | undefined,
    images?: [] | undefined,
    categories: number[] | undefined,
    tags?: ITag[] | undefined,
    url: string | undefined,
    forum_url: string | undefined,
    typeform_competitor_popup: string | undefined,
    typeform_question_popup: string | undefined,
    start_date: string | undefined,
    close_date: string | null | undefined,
}

export interface IUpdateProject {
    projectID: number
    project: ICreateProject
}

export interface ImagesUpload {
    provider: string,
    file: FormData
}

export interface FileUpload {
    file_name: string,
    file_size: number | string
    object_key: string,
    source: string
}

export interface ResponceImagesUpload {
    isUpload?: boolean,
    fileUpload?: FileUpload | undefined
}