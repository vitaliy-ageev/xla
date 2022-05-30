import React, { FunctionComponent } from 'react'
import classes from './LinearCornerSeparation.module.scss'

interface ILineSeparation {
    mobile?: boolean
}

const LinearSeparation: FunctionComponent<ILineSeparation> = ({ mobile }) => {
    let rootClasses = [classes.linear_separation];

    if (mobile) {
        rootClasses.push(classes.mobile);
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={classes.linear_separation_corner}></div>
        </div>
    )
}

export default LinearSeparation