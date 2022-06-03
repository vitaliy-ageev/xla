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
                <a href="https://cryptomaton.medium.com/does-terra-deserve-a-second-chance-92c9546ae5af"
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
                            Does Terra Deserve a Second Chance?
                        </div>
                        {/* SubInformation */}
                        <div className={classes.article_subnavigation_block}>
                            {/* Tag */}
                            <div className={[classes.article_subnavigation_text, classes.tag].join(' ')}>
                                Crypto
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
                </a>
            </div >
        </NoiseEffect>
    )
}

export default Article