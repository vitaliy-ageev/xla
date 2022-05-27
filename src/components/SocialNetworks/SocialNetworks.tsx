import React, { FunctionComponent } from 'react'
import Discord from '../UI/Icons/Social/Discord'
import Facebook from '../UI/Icons/Social/Facebook'
import Instagram from '../UI/Icons/Social/Instagram'
import LinkedIn from '../UI/Icons/Social/LinkedIn'
import Reddit from '../UI/Icons/Social/Reddit'
import Telegram from '../UI/Icons/Social/Telegram'
import Twitter from '../UI/Icons/Social/Twitter'
import Union from '../UI/Icons/Social/Union'
import classes from './SocialNetworks.module.scss'

const SocialNetworks: FunctionComponent = () => {
    const SocialMedia = [
        { id: 1, name: 'discord', icon: '', link: '/' }
    ]

    return (
        <div className={classes.social_networks}>
            {/* <div className={classes.social_networks_title}>
                Follow us
            </div> */}
            <div className={classes.social_networks_inner}>
                <div className={classes.social_networks_item}>
                    <Discord />
                </div>
                <div className={classes.social_networks_item}>
                    <Telegram />
                </div>
                <div className={classes.social_networks_item}>
                    <Instagram />
                </div>
                <div className={classes.social_networks_item}>
                    <Twitter />
                </div>
                <div className={classes.social_networks_item}>
                    <Facebook />
                </div>
                <div className={classes.social_networks_item}>
                    <Reddit />
                </div>
                <div className={classes.social_networks_item}>
                    <LinkedIn />
                </div>
                <div className={classes.social_networks_item}>
                    <Union />
                </div>
            </div>
        </div>
    )
}

export default SocialNetworks