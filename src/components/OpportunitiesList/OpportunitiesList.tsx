import React, { FunctionComponent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RouteNames } from '../../routes/routes'
import { opportunityAPI } from '../../services/OpportunityService'
import CustomButton from '../UI/CustomButton/CustomButton'
import Location from '../UI/Icons/Location/Location'
import classes from './OpportunitiesList.module.scss'


import Babka from '../../assets/images/logo_projects/Babka.svg'
import GameInvest from '../../assets/images/logo_projects/GameInvest.svg'
import Metaverse from '../../assets/images/logo_projects/Metaverse.svg'
import Multiverse from '../../assets/images/logo_projects/Multiverse.svg'
import Store3 from '../../assets/images/logo_projects/Store3.svg'
import UserEx from '../../assets/images/logo_projects/UserEx.svg'
import XLACard from '../../assets/images/logo_projects/XLACard.svg'
import Web3 from '../../assets/images/logo_projects/Web3.svg'
import PlayEarn from '../../assets/images/logo_projects/PlayEarn.svg'

const OpportunitiesList: FunctionComponent = () => {
    const { data: opportunities } = opportunityAPI.useFetchAllOpportunitiesQuery(10)
    const history = useNavigate()

    return (
        <div className={classes.opportunities_list}>
            {opportunities && opportunities.opportunities.map(opportunity =>
                <Link to={RouteNames.OPPORTUNITY + '/id=' + opportunity.id} key={opportunity.id} className={classes.opportunities_list_item}>
                    <div className={classes.opportunities_list_item_left}>
                        {/* Background */}
                        <div className={classes.opportunities_list_item_background} style={{
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
                        }}>

                        </div>
                    </div>
                    <div className={classes.opportunities_list_item_right}>
                        <div className={classes.opportunities_list_item_container_left}>
                            {/* Title */}
                            <span className={classes.opportunities_list_item_title}>
                                {opportunity.name}
                            </span>
                            <span className={classes.opportunities_list_item_tags_container}>
                                {/* Tags */}
                                <span className={classes.opportunities_list_item_name_project}>
                                    {opportunity.project.name}
                                </span>
                                <div className={classes.opportunities_list_item_delimiter}></div>
                                <span className={classes.opportunities_list_item_type}>
                                    {opportunity.job_type.name}
                                </span>
                                <div className={classes.opportunities_list_item_delimiter}></div>
                                <span className={classes.opportunities_list_item_method}>
                                    {opportunity.working_mode.name}
                                </span>
                            </span>
                            <div className={classes.opportunities_list_item_hover}></div>
                        </div>
                        <div className={classes.opportunities_list_item_container_right}>
                            {/* Location & Data */}
                            <div className={classes.opportunities_list_item_location_block}>
                                {opportunity.location && <>
                                    <span className={classes.opportunities_list_item_location}>
                                        <Location />
                                        <span>{opportunity.location}</span>
                                    </span></>}
                                <span className={classes.opportunities_list_item_data}>
                                    {new Date(opportunity.created_at).toDateString()}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.opportunities_list_item_buttons}>
                        <CustomButton styleBtn='border' marginR={20} width={200} color='black' style='opportunities_list'>
                            <button onClick={() => history(RouteNames.OPPORTUNITY + '/id=' + opportunity.id)}>View offer</button>
                        </CustomButton>
                        <a href={opportunity.typeform_url?.toString()} target="_blank">
                            <CustomButton styleBtn='border' width={200} color='black' style='opportunities_list'>
                                <button>Apply now</button>
                            </CustomButton></a>
                    </div>
                </Link>
            )
            }
        </div >
    )
}

export default OpportunitiesList