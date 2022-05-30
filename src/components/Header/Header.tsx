import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../UI/CustomButton/CustomButton'
import BurgerMenu from '../../components/Header/BurgerMenu/BurgerMenu'
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
        <div className={rootClasses.join(' ')}>
            <div className='container'>
                <div className={classes.header_inner}>
                    <div className={classes.header_left_block}>
                        {/* Logotype */}
                        <Link to="/">
                            <Logotype color={style} />
                        </Link>
                        {/* Menu */}
                        <div className={classes.header_menu}>
                            {menuItems.map(item =>
                                <Link to={item.link} className={classes.header_menu_item} key={item.id}>{item.name}</Link>
                            )}
                        </div>
                    </div>
                    {/* Sign In & Sign Up */}
                    <div className={classes.header_buttons}>
                        {/* <CustomButton name='Log In' /> */}
                        <CustomButton name='Sing In' styleBtn='background' color={style} />
                    </div>
                    <div className={classes.header_burger_menu}>
                        <BurgerMenu style={style} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header