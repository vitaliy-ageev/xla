import React, { FunctionComponent } from 'react'
import classes from './Title.module.scss'

interface ITitle {
    title: string,
}

const Title: FunctionComponent<ITitle> = ({ title }) => {
    return (
        <div className={classes.title}>{title}</div>
    )
}

export default Title