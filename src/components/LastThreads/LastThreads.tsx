import React, { FunctionComponent, useEffect, useState } from 'react';
import { useFetchAllTopicsQuery } from '../../services/forumService';
import Comments from '../UI/Icons/Comments/Comments';
import classes from './LastThreads.module.scss'

interface LastThreadsProps {
    style?: string
}

const LastThreads: FunctionComponent<LastThreadsProps> = (props) => {
    const [offset, setOffset] = useState<number>(0)
    const [limit, setLimit] = useState<number>(3)
    const { data: topics } = useFetchAllTopicsQuery({ limit: limit, offset: offset })

    useEffect(() => {
        if (topics && topics?.total && offset !== (topics.offset - 3)) {
            setOffset(topics.total - 3)
        }
    }, [topics])



    let rootClasses = [classes.last_threads];

    if (props.style == 'project_page') {
        rootClasses.push(classes.project_page)
    }

    return (

        <div className={rootClasses.join(' ')}>
            <div className={[classes.last_threads_container, classes.title_block].join(' ')}>
                {/* Title */}
                <span className={[classes.last_threads_title].join(' ')}>
                    Latest threads
                </span>
                {/* Count */}
                <span className={[classes.last_threads_title, classes.count].join(' ')}>
                    {topics?.topics.length}
                </span>
            </div>
            <div>
                {topics?.topics.map(item =>
                    <a href={item.url} target="_blank" key={item.url} className={classes.last_threads_item}>
                        {/* Tranding? */}
                        <div className={classes.last_threads_item_tranding_block}>
                            Trending 🔥
                        </div>
                        {/* Title */}
                        <span className={classes.last_threads_item_title}>
                            {item.title}
                            <div className={classes.last_threads_item_title_hover} />
                        </span>
                        <div className={classes.last_threads_container}>
                            {/* Tags */}
                            <div className={classes.last_threads_item_tags}>
                                {item.tags.map(
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
                                    {item.posts_count}
                                </span>
                            </div>
                        </div>
                    </a>
                )
                }
            </div>

            <div className={classes.last_threads_corner_upper} />
            <div className={classes.last_threads_corner_down} />
        </div >
    )
}

export default LastThreads