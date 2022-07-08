import React, { FunctionComponent } from 'react'
import classes from './Error.module.scss'

interface ErrorProps {
    text: string
}

const Error: FunctionComponent<ErrorProps> = (props) => {
    return (
        <div className={classes.error}>
            {props.text}
        </div>
    )
}

export default Error