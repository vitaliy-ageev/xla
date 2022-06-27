import React, { FunctionComponent, MouseEventHandler, ReactElement } from 'react'
import Star from '../../Icons/Star/Star'
import classes from './Panel.module.scss'

interface PanelProps {
    children?: ReactElement,
    onClick?: MouseEventHandler
}

const Panel: FunctionComponent<PanelProps> = (props) => {
    return (
        <div className={classes.panel}>
            <div className={classes.panel_container} onClick={props.onClick}>
                <Star />
            </div>
            {props.children}
        </div>
    )
}

export default Panel