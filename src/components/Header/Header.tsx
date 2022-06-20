import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../UI/CustomButton/CustomButton'
import BurgerMenu from '../../components/Header/BurgerMenu/BurgerMenu'
import Logotype from '../UI/Logotype/Logotype'
import classes from './Header.module.scss'
import { Embed } from '../../utils/embed'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { filterSlice } from '../../store/reducers/filterSlice/filterSlice'
import { RouteNames } from '../../routes/routes'

interface IHeader {
    style: string,
}

const Header: FunctionComponent<IHeader> = ({ style }) => {
    const [thisState, setThisState] = useState(false);
    const { setProjectId } = filterSlice.actions;
    const dispatch = useAppDispatch();

    const { isAuth } = useAppSelector(state => state.authReducer);
    const { adminAuth } = useAppSelector(state => state.adminReducer);

    useEffect(() => {
        Embed()
    }, [thisState])

    const menuItems = [
        { id: 1, name: "All projects", link: `${RouteNames.MAIN}`, isScroll: true },
        { id: 2, name: "Opportunities", link: `${RouteNames.OPPORTUNITIES}`, isScroll: false }
    ]

    const rootClasses = [classes.header]
    if (style == 'black') {
        rootClasses.push(classes.black)
    } else (
        rootClasses.push(classes.white)
    )

    const clickOnOpp = () => {
        dispatch(setProjectId(undefined))
    }

    const { isScroll } = useAppSelector(state => state.generalReducer)
    const scrollToBlock = (name: string) => {
        if (name == 'All projects') {
            document.querySelector('html')?.classList.add('scroll')
            setTimeout(() => {
                window.scrollTo(0, Number(isScroll))
                document.querySelector('html')?.classList.remove('scroll')

            }, 100)
        }
        clickOnOpp()
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className='container'>
                <div className={classes.header_inner}>
                    <div className={classes.header_left_block}>
                        {/* Logotype */}
                        <Link to={RouteNames.MAIN}>
                            <Logotype color={style} />
                        </Link>
                        {/* Menu */}
                        <div className={classes.header_menu}>
                            {menuItems.map(item =>
                                <Link to={item.link} className={classes.header_menu_item} key={item.id}
                                    onClick={() => scrollToBlock(item.name)}
                                >{item.name}</Link>
                            )}
                        </div>
                    </div>
                    {/* Sign In & Sign Up */}
                    <div className={classes.header_buttons}>
                        {/* <CustomButton name='Log In' /> */}
                        {/* <CustomButton styleBtn='background' color={style}>
                            <button data-tf-popup="adHiZ5FW"
                                data-tf-iframe-props="title=Opportunity (copy)"
                                data-tf-medium="snippet"
                                data-tf-hidden="hidden1=xxxxx"
                            >
                                Sing In
                            </button>
                        </CustomButton> */}

                        {adminAuth &&
                            <>
                                <Link to={RouteNames.CREATE_PROJECT}
                                    className={classes.header_buttons_create_project}>
                                    Create Project
                                </Link>
                            </>
                        }
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