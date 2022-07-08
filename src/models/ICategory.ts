export interface ICategories {
    id: number,
    key: string,
    name: string
}

export interface IFetchCategories {
    categories: ICategories[],
    limit: number,
    offset: number,
    total: number
}

export interface CreateCategory {
    key: string,
    name: string
}

export interface UpdateCategory {
    id: number,
    category: CreateCategory
}

export interface DeleteCategory {
    id: number
}