import React, { FunctionComponent } from 'react'
import classes from './Article.module.scss'
import BG from '../../assets/images/3.jpeg'
import SandBox from '../UI/Icons/SandBox/SandBox'
import Corner from '../UI/Icons/Corner/Corner'

const Article: FunctionComponent = () => {
    return (
        <div className={classes.article}>
            <div className={classes.article_background}
                style={{
                    background: ` rgba(0, 0, 0, 0.5) url(${BG})`
                }} />
            {/* Icon Corner */}
            <div className={classes.article_corner}>
                <Corner />
            </div>

            <div className={classes.article_title_block}>
                {/* Title */}
                <div className={classes.article_title}>
                    DO YOU BELIEVE WEB3 IS THE FUTURE?
                </div>
                {/* SubInformation */}
                <div className={classes.article_subnavigation_block}>
                    {/* Tag */}
                    <div className={[classes.article_subnavigation_text, classes.tag].join(' ')}>
                        Tag
                    </div>
                    {/* Duration */}
                    <div className={[classes.article_subnavigation_text, classes.duration].join(' ')}>
                        <div className={classes.duration_text}>
                            5 min read
                        </div>
                        <SandBox />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Article