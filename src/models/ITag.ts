export interface CreateTag {
    key: string,
    name: string
}

export interface UpdateTag {
    id: number,
    tag: CreateTag
}

export interface DeleteTag {
    id: number
}