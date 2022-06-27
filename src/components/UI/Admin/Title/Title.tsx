import React, { FunctionComponent } from 'react'
import classes from './Title.module.scss'

interface TitleProps {
    title: string
}

const Title: FunctionComponent<TitleProps> = (props) => {
    return (
        <span className={classes.title}>
            {props.title}
        </span>
    )
}

export default Title