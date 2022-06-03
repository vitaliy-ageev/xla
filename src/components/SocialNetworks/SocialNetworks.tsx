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
                <a href='https://discord.com/invite/xla' target="_blank"
                    className={[classes.social_networks_item, classes.discord].join(' ')}>
                    <Discord />
                    <div className={classes.social_networks_item_upper}></div>
                    <div className={classes.social_networks_item_down}></div>
                </a>
                <a href='https://t.me/x_la_announcements' target="_blank"
                    className={[classes.social_networks_item, classes.telegram].join(' ')}>
                    <Telegram />
                    <div className={classes.social_networks_item_upper}></div>
                    <div className={classes.social_networks_item_down}></div>
                </a>
                <a href='https://www.instagram.com/x.la.official' target="_blank"
                    className={[classes.social_networks_item, classes.instagram].join(' ')}>
                    <Instagram />
                    <div className={classes.social_networks_item_upper}></div>
                    <div className={classes.social_networks_item_down}></div>
                </a>
                <a href='https://twitter.com/x_la_official' target="_blank"
                    className={[classes.social_networks_item, classes.twitter].join(' ')}>
                    <Twitter />
                    <div className={classes.social_networks_item_upper}></div>
                    <div className={classes.social_networks_item_down}></div>
                </a>
                <a href='https://www.facebook.com/x.la.official.page' target="_blank"
                    className={[classes.social_networks_item, classes.facebook].join(' ')}>
                    <Facebook />
                    <div className={classes.social_networks_item_upper}></div>
                    <div className={classes.social_networks_item_down}></div>
                </a>
                <a href='https://reddit.com/r/x_la_official' target="_blank"
                    className={[classes.social_networks_item, classes.reddit].join(' ')}>
                    <Reddit />
                    <div className={classes.social_networks_item_upper}></div>
                    <div className={classes.social_networks_item_down}></div>
                </a>
                <a href='https://www.linkedin.com/company/x-la-official' target="_blank"
                    className={[classes.social_networks_item, classes.linkein].join(' ')}>
                    <LinkedIn />
                    <div className={classes.social_networks_item_upper}></div>
                    <div className={classes.social_networks_item_down}></div>
                </a>
                <a href='https://opportunities.x.la' target="_blank"
                    className={[classes.social_networks_item, classes.union].join(' ')}>
                    <Union />
                    <div className={classes.social_networks_item_upper}></div>
                    <div className={classes.social_networks_item_down}></div>
                </a>
            </div>
        </div>
    )
}

export default SocialNetworks