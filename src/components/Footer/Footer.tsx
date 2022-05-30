import React, { FunctionComponent } from 'react'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import Logotype from '../UI/Logotype/Logotype'
import classes from './Footer.module.scss'

const Footer: FunctionComponent = () => {
    return (
        <div className={classes.footer}>
            <div className='container'>
                <div className={classes.footer_inner}>
                    {/* Logotype */}
                    <div className={classes.footer_left_container}>
                        <div className={classes.footer_logotype}>
                            <Logotype color='black' style='footer' />
                        </div>
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