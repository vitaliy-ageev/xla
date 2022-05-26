import React, { FunctionComponent } from 'react'
import classes from './SocialNetworks.module.scss'

const SocialNetworks: FunctionComponent = () => {
    return (
        <div className={classes.social_networks}>
            <div className={classes.social_networks_title}>
                Follow us
            </div>
            <div className={classes.social_networks_inner}>
                <div className={classes.social_networks_item}></div>
                <div className={classes.social_networks_item}></div>
                <div className={classes.social_networks_item}></div>
                <div className={classes.social_networks_item}></div>
                <div className={classes.social_networks_item}></div>
                <div className={classes.social_networks_item}></div>
                <div className={classes.social_networks_item}></div>
                <div className={classes.social_networks_item}></div>
            </div>
        </div>
    )
}

export default SocialNetworks