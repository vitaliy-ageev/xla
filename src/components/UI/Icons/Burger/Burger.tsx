import React, { FunctionComponent, useState } from 'react'
import { Link } from 'react-router-dom'
import Logotype from '../../Logotype/Logotype'
import Modal from '../../Modal/Modal'
import classes from './Burger.module.scss'

interface BurgerMenuProps {
    isActiveBurger: boolean,
    style: string
}

const BurgerMenu: FunctionComponent<BurgerMenuProps> = (props) => {
    let rootClasses = [classes.burger_menu]
    if (props.isActiveBurger)
        rootClasses.push(classes.active)
    else
        rootClasses = [classes.burger_menu]

    if (props.style == 'black')
        rootClasses.push(classes.black)
    else
        rootClasses.push(classes.white)

    return (
        <div className={rootClasses.join(' ')}>
            <div className={classes.burger_menu_line}></div>
            <div className={classes.burger_menu_line}></div>
            <div className={classes.burger_menu_line}></div>
        </div>

    )
}

export default BurgerMenu