interface ITags {
    id: number,
    name: string
}

export interface ITopics {
    posts_count: number,
    tags: ITags[],
    title: string,
    url: string
}

export interface IFetchAllTopics {
    limit: number,
    offset: number,
    topics: ITopics[],
    total: number
}

export interface paramsQuery {
    limit: number,
    offset: number
}