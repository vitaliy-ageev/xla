import React, { FunctionComponent } from 'react'
import classes from './StartBlock.module.scss'

const StartBlock: FunctionComponent = () => {
    return (
        <div className={classes.start_block}>
            <div className={classes.separators_block}>
                <div className={classes.separator}>
                    <div className={classes.rotate}></div>
                </div>
            </div>

            <div className={classes.separators_block_2}>
                <div className={classes.separator_2}>
                    <div className={classes.rotate_2}></div>
                </div>
            </div>
        </div>
    )
}

export default StartBlock