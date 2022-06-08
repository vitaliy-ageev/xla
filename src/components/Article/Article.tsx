import React, { FunctionComponent } from 'react'
import classes from './Article.module.scss'
import BG from '../../assets/images/article.jpeg'
import SandBox from '../UI/Icons/SandBox/SandBox'
import Corner from '../UI/Icons/Corner/Corner'
import NoiseEffect from '../UI/NoiseEffect/NoiseEffect'

const Article: FunctionComponent = () => {
    return (
        <NoiseEffect opacity='0.1'>
            <div className={classes.article}>
                <a href="https://opportunities.x.la/can-anything-on-the-internet-be-a-token-cde8d728a77d"
                    target="_blank">
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
                            Can Anything on the Internet be a Token?
                        </div>
                        {/* SubInformation */}
                        <div className={classes.article_subnavigation_block}>
                            {/* Tag */}
                            <div className={[classes.article_subnavigation_text, classes.tag].join(' ')}>
                                NFT
                            </div>
                            {/* Duration */}
                            <div className={[classes.article_subnavigation_text, classes.duration].join(' ')}>
                                <div className={classes.duration_text}>
                                    6 min read
                                </div>
                                <SandBox />
                            </div>
                        </div>
                    </div>
                </a>
            </div >
        </NoiseEffect>
    )
}

export default Article