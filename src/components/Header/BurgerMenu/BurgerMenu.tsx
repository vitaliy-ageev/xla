import React, { FunctionComponent, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/hooks'
import CustomButton from '../../UI/CustomButton/CustomButton'
import Burger from '../../UI/Icons/Burger/Burger'
import Logotype from '../../UI/Logotype/Logotype'
import Modal from '../../UI/Modal/Modal'
import classes from './BurgerMenu.module.scss'

interface BurgerMenuProps {
    style: string
}

const BurgerMenu: FunctionComponent<BurgerMenuProps> = (props) => {
    const [isActiveBurger, setIsActiveBurger] = useState<boolean>(false);
    const [viewModal, setViewModal] = useState<boolean>(false);

    const clickOnBurgerMenu = () => {
        if (isActiveBurger) {
            setIsActiveBurger(false)
            setViewModal(false)
        } else {
            setIsActiveBurger(true)
            setViewModal(true)
        }
    }

    const { isScroll } = useAppSelector(state => state.generalReducer)
    const scrollToBlock = () => {
        document.querySelector('html')?.classList.add('scroll')
        setTimeout(() => {
            window.scrollTo(0, Number(isScroll))
            document.querySelector('html')?.classList.remove('scroll')

        }, 100)
    }

    return (
        <div className={classes.burger_menu} onClick={clickOnBurgerMenu} >
            <Burger style={props.style} isActiveBurger={isActiveBurger} />
            <Modal viewModal={viewModal} >
                <div className='container'>
                    {/* Header */}
                    <div className={classes.burger_menu_header}>
                        {/* Logotype */}
                        <Link to="/">
                            <Logotype color='black' />
                        </Link>
                    </div>
                    {/* Menu */}
                    <div className={classes.burger_menu_links}>
                        <Link to='/project' className={classes.burger_menu_link}
                            onClick={scrollToBlock}>
                            All projects
                        </Link>
                        <Link to='/opportunities' className={classes.burger_menu_link}>
                            Opportunities
                        </Link>
                    </div>
                    {/* Buttons */}
                    <div className={classes.burger_menu_buttons}>
                        <CustomButton
                            styleBtn='background'
                            color='black'
                            width={352}
                        >
                            <button
                                data-tf-slider="adHiZ5FW"
                                data-tf-width="550"
                                data-tf-iframe-props="title=Registration"
                                data-tf-medium="snippet"
                                data-tf-hidden="hidden1=xxxxx"
                            >
                                Get started
                            </button>
                        </CustomButton>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default BurgerMenu