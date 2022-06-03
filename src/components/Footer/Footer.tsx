import React, { FunctionComponent } from 'react'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import Logotype from '../UI/Logotype/Logotype'
import classes from './Footer.module.scss'
import { Link } from 'react-router-dom'

const Footer: FunctionComponent = () => {
    const clickFooter = () => {
        document.querySelector('html')?.classList.add('scroll')
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.querySelector('html')?.classList.remove('scroll')
        }, 100)
    }

    return (
        <div className={classes.footer}>
            <div className='container'>
                <div className={classes.footer_inner}>
                    {/* Logotype */}
                    <div className={classes.footer_left_container}>
                        <Link to="/" className={classes.footer_logotype}>
                            <Logotype onClick={clickFooter} color='black' style='footer' />
                        </Link>
                    </div>
                    <div className={classes.footer_right_container}>

                    </div>
                    {/* Social Networks */}
                    <SocialNetworks />
                </div>
            </div>
        </div>
    )
}

export default Footer