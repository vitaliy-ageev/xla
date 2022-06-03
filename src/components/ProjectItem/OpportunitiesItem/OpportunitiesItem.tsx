import React, { FunctionComponent, useEffect, useState } from 'react'
import { IFethOpportunity } from '../../../models/IOpportunity'
import { Embed } from '../../../utils/embed'
import classes from './OpportunitiesItem.module.scss'

interface OpportunitiesItemProps {
    opportunities: IFethOpportunity
}

const OpportunitiesItem: FunctionComponent<OpportunitiesItemProps> = (props) => {

    const [thisState, setThisState] = useState(false);

    useEffect(() => {
        Embed()
    }, [thisState])

    return (
        <div className={classes.opportunities_section}>
            {props.opportunities.opportunities && props.opportunities.opportunities.map(item =>
                <>{item.logo_url && item.description && <>
                    <button data-tf-slider={item.typeform_popup?.split(`"`)[1]}
                        data-tf-width="550"
                        data-tf-iframe-props={`title=${item.name}`}
                        data-tf-medium="snippet"
                        data-tf-hidden="hidden1=xxxxx"
                        key={item.id} className={classes.opportunities_section_item}>
                        {/* Background */}
                        <div className={classes.opportunities_section_item_left_container}>
                            <div className={classes.opportunities_section_item_background}>
                                <div className={classes.opportunities_section_item_background_icon}
                                    style={{ background: `url(${item.logo_url})` }}
                                >
                                </div>
                                <div className={classes.opportunities_section_item_background_corner_upper}></div>
                                <div className={classes.opportunities_section_item_background_corner_down}></div>
                            </div>
                        </div>
                        {/* Desc */}
                        <div className={classes.opportunities_section_item_right_container}>
                            <span className={classes.opportunities_section_item_title}>
                                {item.name}
                                <div className={classes.opportunities_section_item_title_hover} />
                            </span>
                            <span className={classes.opportunities_section_item_description}>
                                {item.description.length > 90 ? item.description.slice(0, 90) + '...' : item.description}
                            </span>
                        </div>
                    </button></>
                }

                </>
            )
            }
        </div >
    )
}

export default OpportunitiesItem