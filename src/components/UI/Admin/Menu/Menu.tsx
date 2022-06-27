import React, { FunctionComponent } from 'react'
import classes from './menu.module.scss'

interface MenuProps {
    visible: boolean,
    children?: React.ReactElement | React.ReactElement[]
}

const Menu: FunctionComponent<MenuProps> = (props) => {
    let rootClasses = [classes.menu]
    if (props.visible) {
        rootClasses.push(classes.active)
    } else {
        rootClasses = [classes.menu]
    }

    return (
        <div className={rootClasses.join(' ')}>
            {props.children}
        </div>
    )
}

export default Menu