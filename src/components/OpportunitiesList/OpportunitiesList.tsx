import React, { FunctionComponent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RouteNames } from '../../routes/routes'
import { opportunityAPI } from '../../services/OpportunityService'
import { Embed } from '../../utils/embed'
import CustomButton from '../UI/CustomButton/CustomButton'
import Location from '../UI/Icons/Location/Location'
import classes from './OpportunitiesList.module.scss'

const OpportunitiesList: FunctionComponent = () => {
    const { data: opportunities } = opportunityAPI.useFetchAllOpportunitiesQuery(50)

    setTimeout(() => {
        Embed()
    }, 10)

    const onClickItem = (e: any) => {
        e.preventDefault()
    }

    let resultArray = []
    let array = opportunities?.opportunities.slice()
    let n = opportunities?.opportunities.length
    if (array && n && n > array?.length)
        n = array?.length

    if (array && n) {
        for (let i = 0; i < n; i += 1) {
            resultArray.push(array.splice(Math.floor(Math.random() * array.length), 1)[0]);
        }
    }

    return (
        <div className={classes.opportunities_list}>
            {opportunities && resultArray.slice(0, 10).map(opportunity =>
                <Link to={RouteNames.OPPORTUNITY + '/id=' + opportunity.id} key={opportunity.id} className={classes.opportunities_list_item}>
                    <div className={classes.opportunities_list_item_left}>
                        {/* Background */}
                        <div className={classes.opportunities_list_item_background} style={{
                            background: `url(${opportunity.project.logo_url})`
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
                            {/* <div className={classes.opportunities_list_item_location_block}>
                                {opportunity.location && <>
                                    <span className={classes.opportunities_list_item_location}>
                                        <Location />
                                        <span>{opportunity.location}</span>
                                    </span></>}
                                <span className={classes.opportunities_list_item_data}>
                                    {new Date(opportunity.created_at).toDateString()}
                                </span>
                            </div> */}
                        </div>
                    </div>
                    <div className={classes.opportunities_list_item_buttons}>
                        <div>
                            <CustomButton styleBtn='border' marginR={20} width={200} color='black' style='opportunities_list'>
                                <button>View offer</button>
                            </CustomButton>
                        </div>
                        <div>
                            <CustomButton styleBtn='border' width={200} color='black' style='opportunities_list'>
                                <button
                                    data-tf-slider={opportunity.typeform_apply_popup ? opportunity.typeform_apply_popup.toString().split('"')[1] : ''}
                                    data-tf-width="550"
                                    data-tf-iframe-props={`title=${opportunity.name}`}
                                    data-tf-medium="snippet"
                                    data-tf-hidden="hidden1=xxxxx"

                                    onClick={(e) => onClickItem(e)}
                                >Apply now</button>
                            </CustomButton>
                        </div>

                    </div>
                </Link>
            )
            }
        </div >
    )
}

export default OpportunitiesList