import React, { FunctionComponent, useEffect, useState } from 'react'
import { IOpportunity } from '../../../models/IOpportunity'
import { Embed } from '../../../utils/embed'
import classes from './Opportunities.module.scss'

interface OpportunitiesItemProps {
    opportunities: IOpportunity[] | undefined
}

const Opportunities: FunctionComponent<OpportunitiesItemProps> = (props) => {
    useEffect(() => {
        Embed()
    }, [])

    return (
        <div className={classes.opportunities_section}>
            {props.opportunities && props.opportunities.map(item =>
                <>
                    <button data-tf-slider={item.typeform_apply_popup?.split(`"`)[1]}
                        data-tf-width="550"
                        data-tf-iframe-props={`title=${item.name}`}
                        data-tf-medium="snippet"
                        data-tf-hidden="hidden1=xxxxx"
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
                    </button>
                </>
            )}
        </div >
    )
}

export default Opportunities