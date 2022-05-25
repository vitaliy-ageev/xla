import React, { FunctionComponent } from 'react'
import classes from './Categories.module.scss'

const Categories: FunctionComponent = () => {
    return (
        <div className={classes.categories}>
            <div className={classes.categories_inner}>
                {/* Name */}
                <span className={classes.categories_name}>
                    All projects
                </span>
                {/* Count */}
                <span className={classes.categories_count}>
                    24
                </span>
            </div>

        </div>
    )
}

export default Categories