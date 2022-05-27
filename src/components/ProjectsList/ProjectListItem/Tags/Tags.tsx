import React, { FunctionComponent } from 'react'
import classes from './Tags.module.scss'

interface ITag {
    id: number,
    name: string,
    path: string
}

interface ITags {
    tags: ITag[]
}


const Tags: FunctionComponent<ITags> = ({ tags }) => {
    return (
        <div className={classes.tags}>
            {tags.map(tag =>
                <div key={tag.id} className={classes.tags_item}>
                    {tag.name}
                </div>
            )}
        </div>
    )
}

export default Tags