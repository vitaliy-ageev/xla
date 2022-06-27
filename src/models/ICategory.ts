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