import React, { FunctionComponent, useState } from 'react'
import { IOpportunity } from '../../../models/IOpportunity'
import classes from './Opportunities.module.scss'
import OpportunityModal from '../OpportunityModal/OpportunityModal'

interface OpportunitiesItemProps {
    opportunities: IOpportunity[]
}

const Opportunities: FunctionComponent<OpportunitiesItemProps> = (props) => {
    const [isOpportunityModalOpen, setisOpportunityModalOpen] = useState<boolean>(false);
    const [opportunityModalContent, setOpportunityModalContent] = useState<IOpportunity | null>(null);

    const openOpportunityModal = (opportunity: IOpportunity) => {
        setOpportunityModalContent(opportunity)
        setisOpportunityModalOpen(true)
    }

    const closeOpportunityModal = () => {
        setisOpportunityModalOpen(false)
    }

    return (
        props.opportunities && (
            <div className={classes.opportunities_section}>
                {props.opportunities.map(item =>
                    <button className={classes.opportunities_section_item} key={item.id} onClick={() => openOpportunityModal(item)}>
                        {/* Background */}
                        <div className={classes.opportunities_section_item_left_container}>
                            <div className={classes.opportunities_section_item_background}>
                                <div className={classes.opportunities_section_item_background_icon}
                                    style={{
                                        background: `url(${item.abstract_logo_url})`,
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
                            </span>
                            {/* <span className={classes.opportunities_section_item_description}>
                                {item.description.length > 50 ? item.description.slice(0, 75) + '...' : item.description}
                            </span> */}
                            <div className={classes.opportunities_section_item_title_hover} />
                        </div>
                    </button>
                )}

                <OpportunityModal opportunity={opportunityModalContent} opportunities={props.opportunities} isOpen={isOpportunityModalOpen} closeModal={closeOpportunityModal} />
            </div >
        )
    )
}

export default Opportunities