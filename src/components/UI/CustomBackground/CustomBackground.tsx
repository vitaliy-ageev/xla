import React, { FunctionComponent } from 'react';
import classes from './CustomBackground.module.scss'


import Babka from '../../../assets/images/logo_projects/Babka.svg'
import GameInvest from '../../../assets/images/logo_projects/GameInvest.svg'
import Metaverse from '../../../assets/images/logo_projects/Metaverse.svg'
import Multiverse from '../../../assets/images/logo_projects/Multiverse.svg'
import Store3 from '../../../assets/images/logo_projects/Store3.svg'
import UserEx from '../../../assets/images/logo_projects/UserEx.svg'
import XLACard from '../../../assets/images/logo_projects/XLACard.svg'
import Web3 from '../../../assets/images/logo_projects/Web3.svg'
import PlayEarn from '../../../assets/images/logo_projects/PlayEarn.svg'

interface CustomBackgroundProps {
    class?: string,
    name?: string
}

const CustomBackground: FunctionComponent<CustomBackgroundProps> = (props) => {
    let rootClasses = [classes.custom_background]
    if (props.class == 'opportuniti_page') {
        rootClasses.push(classes.opportuniti_page)
    }

    return (
        <div className={rootClasses.join(' ')} style={{
            background: `url(${props.name == 'Metaverse' ? Metaverse
                : props.name == 'Multiverse' ? Multiverse
                    : props.name == 'Babka Drops' ? Babka
                        : props.name == 'Story3' ? Store3
                            : props.name == 'Game Investment Platform' ? GameInvest
                                : props.name == 'User Exchange for Video Games' ? UserEx
                                    : props.name == 'X.LA Card' ? XLACard
                                        : props.name == 'Web3 Hollywood Commerce' ? Web3
                                            : props.name == 'Play and Earn economic modes for games' ? PlayEarn
                                                : ''}`
        }}>
            {/* <div className={classes.custom_background_img} ></div> */}

        </div>
    )
}

export default CustomBackground