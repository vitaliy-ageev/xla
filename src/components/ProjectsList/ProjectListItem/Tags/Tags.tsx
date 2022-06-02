import React, { FunctionComponent } from 'react'
import { ITag } from '../../../../models/IProject'
import classes from './Tags.module.scss'

interface TagsProps {
    tags: ITag[]
}

const Tags: FunctionComponent<TagsProps> = (props) => {
    return (
        <div className={classes.tags}>
            {props.tags.map(tag =>
                <div key={tag.id} className={classes.tags_item}>
                    {tag.name}
                </div>
            )}
        </div>
    )
}

export default Tags