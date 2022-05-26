import React, { FunctionComponent } from 'react';
import Comments from '../UI/Icons/Comments/Comments';
import NoiseEffect from '../UI/NoiseEffect/NoiseEffect';
import classes from './LastThreads.module.scss'

interface IThreadTags {
    id: number,
    name: string
}

interface IThreads {
    id: number,
    title: string,
    isTrending: boolean,
    comments: number,
    tags: IThreadTags[],
    link: string
}

interface ILastThreads {
    threadItems: IThreads[]
}

const LastThreads: FunctionComponent<ILastThreads> = ({ threadItems }) => {
    return (

        <div className={classes.last_threads}>
            <div className={[classes.last_threads_container, classes.title_block].join(' ')}>
                {/* Title */}
                <span className={[classes.last_threads_title].join(' ')}>
                    Latest threads
                </span>
                {/* Count */}
                <span className={[classes.last_threads_title, classes.count].join(' ')}>
                    {threadItems.length}
                </span>
            </div>
            <div>
                {threadItems.map(threadItem =>
                    <div key={threadItem.id} className={classes.last_threads_item}>
                        {/* Tranding? */}
                        {threadItem.isTrending ? <div className={classes.last_threads_item_tranding_block}>
                            Trending 🔥
                        </div>
                            : ''}
                        {/* Title */}
                        <span className={classes.last_threads_item_title}>
                            {threadItem.title}
                            <div className={classes.last_threads_item_title_hover} />
                        </span>
                        <div className={classes.last_threads_container}>
                            {/* Tags */}
                            <div className={classes.last_threads_item_tags}>
                                {threadItem.tags.map(
                                    tag =>

                                        <span key={tag.id} className={classes.last_threads_item_tag}>
                                            #{tag.name}
                                        </span>
                                )}
                            </div>
                            {/* Comments */}
                            < div className={classes.last_threads_item_comments} >
                                <Comments />
                                <span className={classes.last_threads_item_comments_count}>
                                    {threadItem.comments}
                                </span>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>

            <div className={classes.last_threads_corner_upper} />
            <div className={classes.last_threads_corner_down} />
        </div >
    )
}

export default LastThreads