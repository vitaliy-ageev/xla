import React, { FunctionComponent } from 'react'
import classes from './Background.module.scss'

const Background: FunctionComponent = () => {
    return (
        <div className={classes.background}>
            <div className={classes.background_image}></div>
            <div className={classes.background_inner}></div>
        </div>
    )
}

export default Background