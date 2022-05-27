import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../UI/CustomButton/CustomButton'
import Logotype from '../UI/Logotype/Logotype'
import classes from './Header.module.scss'

interface IHeader {
    style: string
}

const Header: FunctionComponent<IHeader> = ({ style }) => {

    const menuItems = [
        { id: 1, name: "All project", link: "/project" },
        { id: 2, name: "Opportunities", link: "/opportunities" },
        { id: 3, name: "Hire Creators", link: "/hire-creators" }
    ]

    const rootClasses = [classes.header]
    if (style == 'black') {
        rootClasses.push(classes.black)
    } else (
        rootClasses.push(classes.white)
    )

    return (
        <Link to='/' className={rootClasses.join(' ')}>
            <div className='container'>
                <div className={classes.header_inner}>
                    <div className={classes.header_left_block}>
                        {/* Logotype */}
                        <Logotype color={style} />
                        {/* Menu */}
                        <div className={classes.header_menu}>
                            {menuItems.map(item =>
                                <div className={classes.header_menu_item} key={item.id}>{item.name}</div>
                            )}
                        </div>
                    </div>
                    {/* Sign In & Sign Up */}
                    <div className={classes.header_buttons}>
                        {/* <CustomButton name='Log In' /> */}
                        <CustomButton name='Sing In' styleBtn='background' color={style} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Header