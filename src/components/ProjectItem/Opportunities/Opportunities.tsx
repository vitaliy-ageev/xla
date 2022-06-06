import React, { FunctionComponent, useEffect, useState } from 'react'
import { IOpportunity } from '../../../models/IOpportunity'
import { Embed } from '../../../utils/embed'
import classes from './Opportunities.module.scss'
import { Link } from 'react-router-dom'
import { RouteNames } from '../../../routes/routes'

interface OpportunitiesItemProps {
    opportunities: IOpportunity[] | undefined
}

const Opportunities: FunctionComponent<OpportunitiesItemProps> = (props) => {
    return (
        <div className={classes.opportunities_section}>
            {props.opportunities && props.opportunities.map(item =>
                <>
                    <Link to={RouteNames.OPPORTUNITY + '/id=' + item.id}
                        key={item.id} className={classes.opportunities_section_item}>
                        {/* Background */}
                        <div className={classes.opportunities_section_item_left_container}>
                            <div className={classes.opportunities_section_item_background}>
                                <div className={classes.opportunities_section_item_background_icon}
                                    style={{
                                        background: `url(${item.logo_url})`,
                                        backgroundSize: `cover`,
                                        backgroundPosition: `center`,
                                        backgroundRepeat: `no-repeat`
                                    }}
                                >
                                </div>
                                <div className={classes.opportunities_section_item_background_corner_upper}></div>
                                <div className={classes.opportunities_section_item_background_corner_down}></div>
                            </div>
                        </div>
                        {/* Description */}
                        <div className={classes.opportunities_section_item_right_container}>
                            <span className={classes.opportunities_section_item_title}>
                                {item.name}
                                <div className={classes.opportunities_section_item_title_hover} />
                            </span>
                            <span className={classes.opportunities_section_item_description}>
                                {item.description.length > 50 ? item.description.slice(0, 75) + '...' : item.description}
                            </span>
                        </div>
                    </Link>
                </>
            )}
        </div >
    )
}

export default Opportunities