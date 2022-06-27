import React, { FunctionComponent, ReactElement } from 'react'
import classes from './Row.module.scss'

interface RowProps {
    children?: ReactElement | ReactElement[]
}

const Row: FunctionComponent<RowProps> = (props) => {
    return (
        <div className={classes.row}>
            {props.children}
        </div>
    )
}

export default Row