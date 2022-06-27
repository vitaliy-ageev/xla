import React, { FunctionComponent, ReactElement } from 'react'
import classes from './Container.module.scss'

interface ContainerProps {
    children?: ReactElement | ReactElement[]
}

const Container: FunctionComponent<ContainerProps> = (props) => {
    return (
        <div className={classes.container}>
            {props.children}
        </div>
    )
}

export default Container