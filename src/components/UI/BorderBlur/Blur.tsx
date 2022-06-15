import React, { FunctionComponent } from 'react'
import classes from './Blur.module.scss'

const Blur: FunctionComponent = () => {
    return (
        <>
            <div className={classes.block_blur_l}></div>
            <div className={classes.block_blur_r}></div>
            <div className={classes.block_blur_t}></div>
            <div className={classes.block_blur_b}></div>
        </>
    )
}

export default Blur