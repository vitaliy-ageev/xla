import React, { FunctionComponent } from 'react'
import classes from './Title.module.scss'

interface TitleProps {
    title: string,
    marginTop?: number,
    marginBottom?: number
}

const Title: FunctionComponent<TitleProps> = (props) => {
    return (
        <h1 className={classes.title}
            style={{
                marginBottom: `${props.marginBottom}px`,
                marginTop: `${props.marginTop}px`
            }}>
            {props.title}
        </h1>
    )
}

export default Title