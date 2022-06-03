import React, { FunctionComponent } from 'react'
import { opportunityAPI } from '../../services/OpportunityService'
import NoiseEffect from '../UI/NoiseEffect/NoiseEffect'
import classes from './OpportunityHiring.module.scss'
import { Link } from 'react-router-dom'

import Babka from '../../assets/images/logo_projects/Babka.svg'
import GameInvest from '../../assets/images/logo_projects/GameInvest.svg'
import Metaverse from '../../assets/images/logo_projects/Metaverse.svg'
import Multiverse from '../../assets/images/logo_projects/Multiverse.svg'
import Store3 from '../../assets/images/logo_projects/Store3.svg'
import UserEx from '../../assets/images/logo_projects/UserEx.svg'
import XLACard from '../../assets/images/logo_projects/XLACard.svg'
import Web3 from '../../assets/images/logo_projects/Web3.svg'
import PlayEarn from '../../assets/images/logo_projects/PlayEarn.svg'
import { RouteNames } from '../../routes/routes'

const OpportunityHiring: FunctionComponent = () => {
    const { data: opportunities } = opportunityAPI.useFetchAllOpportunitiesQuery(5)

    return (
        <>
            {opportunities && <NoiseEffect opacity='0.1'>
                <div className={classes.oppurtunity_hiring}>
                    {/* Header */}
                    <div className={[classes.oppurtunity_hiring_container, classes.title_block].join(' ')}>
                        <span className={[classes.oppurtunity_hiring_title].join(' ')}>
                            Opportunities
                        </span>
                        <span className={[classes.oppurtunity_hiring_title, classes.count].join(' ')}>
                            {opportunities.opportunities.length}
                        </span>
                    </div>

                    <div>
                        {/* Item */}
                        {opportunities && opportunities.opportunities.map(opportunity =>
                            <Link to={RouteNames.OPPORTUNITY + '/id=' + opportunity.id} key={opportunity.id} className={classes.oppurtunity_hiring_item} >
                                <div className={classes.oppurtunity_hiring_item_inner}>
                                    <div className={classes.oppurtunity_hiring_item_left_container}>
                                        {/* Title */}
                                        <span className={classes.oppurtunity_hiring_item_title}>
                                            {opportunity.name}
                                        </span>
                                        {/* Tags */}
                                        <div className={classes.oppurtunity_hiring_item_tags}>
                                            <span className={classes.oppurtunity_hiring_item_tag}>{opportunity.project.name}</span>
                                        </div>
                                    </div>
                                    <div className={classes.oppurtunity_hiring_item_right_container}>
                                        {/* Background */}
                                        <div className={classes.oppurtunity_hiring_item_background}

                                            style={{
                                                background: `url(${opportunity.project.name == 'Metaverse' ? Metaverse
                                                    : opportunity.project.name == 'Multiverse' ? Multiverse
                                                        : opportunity.project.name == 'Babka Drops' ? Babka
                                                            : opportunity.project.name == 'Story3' ? Store3
                                                                : opportunity.project.name == 'Game Investment Platform' ? GameInvest
                                                                    : opportunity.project.name == 'User Exchange for Video Games' ? UserEx
                                                                        : opportunity.project.name == 'X.LA Card' ? XLACard
                                                                            : opportunity.project.name == 'Web3 Hollywood Commerce' ? Web3
                                                                                : opportunity.project.name == 'Play and Earn economic modes for games' ? PlayEarn
                                                                                    : ''}`
                                            }}></div>
                                    </div>
                                </div>
                            </Link >
                        )}
                    </div>
                </div >
            </NoiseEffect >}
        </>

    )
}

export default OpportunityHiring