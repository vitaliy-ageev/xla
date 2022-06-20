import React, { FunctionComponent, ReactElement } from 'react'
import classes from './CenteredWindow.module.scss'

interface CenteredWindowProps {
    children?: ReactElement | ReactElement[]
}

const CenteredWindow: FunctionComponent<CenteredWindowProps> = (props) => {
    return (
        <div className={classes.centered_window}>
            {props.children}
        </div>
    )
}

export default CenteredWindow