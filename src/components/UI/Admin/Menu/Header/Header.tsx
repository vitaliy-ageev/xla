import React, { FunctionComponent } from 'react'
import classes from './Header.module.scss'

interface HeaderProps {
    title: string,
    clickHandler: React.MouseEventHandler
}

const Header: FunctionComponent<HeaderProps> = (props) => {
    return (
        <div className='container'>
            <div className={classes.header_menu_block}>
                <span className={classes.header_menu_block_title}>
                    Admin Panel
                </span>
                <div className={classes.header_menu_block_close} onClick={props.clickHandler}>
                    <div className={classes.header_menu_block_close_line}></div>
                    <div className={classes.header_menu_block_close_line}></div>
                </div>
            </div>
        </div>
    )
}

export default Header