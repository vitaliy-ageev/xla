import React, { FunctionComponent } from 'react'
import classes from './LinearSeparation.module.scss'

const LinearSeparation: FunctionComponent = () => {
    return (
        <div className={classes.linear_separation}>
            <div className={classes.linear_separation_corner}></div>
        </div>
    )
}

export default LinearSeparation