import React, { FunctionComponent } from 'react'
import { opportunityAPI } from '../../services/OpportunityService'
import NoiseEffect from '../UI/NoiseEffect/NoiseEffect'
import classes from './OpportunityHiring.module.scss'
import { Link } from 'react-router-dom'
import { RouteNames } from '../../routes/routes'
import { IOpportunity } from '../../models/IOpportunity'

interface OpportunityHiringProps {
    opportunities: IOpportunity[] | undefined
}

const OpportunityHiring: FunctionComponent<OpportunityHiringProps> = (props) => {

    return (
        <>
            {props.opportunities && <NoiseEffect opacity='0.1'>
                <div className={classes.oppurtunity_hiring}>
                    {/* Header */}
                    <div className={[classes.oppurtunity_hiring_container, classes.title_block].join(' ')}>
                        <span className={[classes.oppurtunity_hiring_title].join(' ')}>
                            Opportunities
                        </span>
                        <span className={[classes.oppurtunity_hiring_title, classes.count].join(' ')}>
                            {props.opportunities.slice(0, 5).length}
                        </span>
                    </div>

                    <div>
                        {/* Item */}
                        {props.opportunities && props.opportunities.slice(0, 5).map(opportunity =>
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
                                        <div className={classes.oppurtunity_hiring_item_background}>
                                            <div className={classes.oppurtunity_hiring_item_background_img}
                                                style={{
                                                    background: `url(${opportunity.project.logo_url})`
                                                }}
                                            ></div>
                                        </div>
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