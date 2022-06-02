import React, { FunctionComponent } from 'react'
import classes from './Background.module.scss'

interface BackgroundProps {
    img?: []
}

const Background: FunctionComponent<BackgroundProps> = (props) => {
    return (
        <div className={classes.background}>
            <div className={classes.background_image} style={{ background: `url(${props.img?.toString().split(',')[0]}` }}></div>
            <div className={classes.background_inner}></div>
        </div>
    )
}

export default Background