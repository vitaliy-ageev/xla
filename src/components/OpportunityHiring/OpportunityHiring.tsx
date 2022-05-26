import React, { FunctionComponent } from 'react'
import LeftRightSection from '../LeftRightSection/LeftRightSection'
import LeftSection from '../LeftRightSection/LeftSection'
import RightSection from '../LeftRightSection/RightSection'
import NoiseEffect from '../UI/NoiseEffect/NoiseEffect'
import classes from './OpportunityHiring.module.scss'

interface IOpportTags {
    id: number,
    name: string
}

interface IOpportunity {
    id: number,
    name: string,
    tags: IOpportTags[],
    background: string,
    link: string
}

interface ILastThreads {
    opportunityItems: IOpportunity[]
}

const OpportunityHiring: FunctionComponent<ILastThreads> = ({ opportunityItems }) => {
    return (
        <NoiseEffect opacity='0.1'>
            <div className={classes.oppurtunity_hiring}>
                {/* Header */}
                <div className={[classes.oppurtunity_hiring_container, classes.title_block].join(' ')}>
                    <span className={[classes.oppurtunity_hiring_title].join(' ')}>
                        Opportunity hiring
                    </span>
                    <span className={[classes.oppurtunity_hiring_title, classes.count].join(' ')}>
                        {opportunityItems.length}
                    </span>
                </div>

                {/* Item */}
                {opportunityItems.map(opportunityItem =>
                    <div className={classes.oppurtunity_hiring_item} >
                        <LeftRightSection justify='space-between'>
                            <LeftSection width='80%'>
                                {/* Title */}
                                <span className={classes.oppurtunity_hiring_item_title}>
                                    {opportunityItem.name}
                                </span>
                                {/* Tags */}
                                <div className={classes.oppurtunity_hiring_item_tags}>
                                    {opportunityItem.tags.map(tag =>
                                        <span className={classes.oppurtunity_hiring_item_tag}>{tag.name}</span>
                                    )}
                                </div>
                            </LeftSection>
                            <RightSection width='20%' alignItems='end'>
                                {/* Background */}
                                <div className={classes.oppurtunity_hiring_item_background}></div>
                            </RightSection>
                        </LeftRightSection>
                    </div >
                )}
                {/* Button Show More */}
                <div className={classes.oppurtunity_hiring_show_more}>
                    Show More
                </div>
            </div >
        </NoiseEffect >

    )
}

export default OpportunityHiring