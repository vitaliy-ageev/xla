import React, { FunctionComponent } from 'react'
import classes from './TitleValue.module.scss'

interface TitleValueProps {
    title: string | null,
    value: string | null
}

const TitleValue: FunctionComponent<TitleValueProps> = (props) => {
    return (
        <div className={classes.tv}>
            <div className={classes.tv_title}>
                {props.title}
            </div>
            <div className={classes.tv_value}>
                {props.value}
            </div>
        </div>
    )
}

export default TitleValue