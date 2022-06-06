import React, { FunctionComponent } from 'react'
import classes from './Title.module.scss'

interface TitleProps {
    title: string,
    link?: string
}

const Title: FunctionComponent<TitleProps> = (props) => {
    return (
        <div className={classes.block}>
            <h3 className={classes.block_title}>
                {props.title}
            </h3>
            <h4 className={classes.block_link}>
                {props.link}
            </h4>
        </div>
    )
}

export default Title