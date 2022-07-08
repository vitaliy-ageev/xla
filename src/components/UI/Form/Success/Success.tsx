import React, { FunctionComponent } from 'react'
import classes from './Success.module.scss'

interface SuccessProps {
    text: string
}

const Success: FunctionComponent<SuccessProps> = (props) => {
    return (
        <div className={classes.success}>
            {props.text}
        </div>
    )
}

export default Success