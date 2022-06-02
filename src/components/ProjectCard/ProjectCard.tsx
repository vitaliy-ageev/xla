import React, { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import { opportunityAPI } from '../../services/OpportunityService'
import CardWithCorner from '../UI/CardWithCorner/CardWithCorner'
import CustomButton from '../UI/CustomButton/CustomButton'
import LinearSeparation from '../UI/LinearSeparation/LinearSeparation'
import classes from './ProjectCard.module.scss'
import TitleValue from './TitleValue/TitleValue'

const ProjectCard: FunctionComponent = () => {
    const { id } = useParams()
    const { data: opportunity } = opportunityAPI.useFetchOneOpportunityQuery(`${id}`)

    return (
        <>{opportunity &&
            <CardWithCorner class='project_card'>
                {/* Name project */}
                <span className={classes.project_card_name}>
                    {opportunity.name}
                </span>
                {/* Link */}
                <a href={opportunity.project.url ? opportunity.project.url : '/'} target='_blank' className={classes.project_card_link}>
                    Visit Website
                </a>
                {/* Button */}
                <a href={opportunity.typeform_url?.toString()} target="_blank">
                    <CustomButton
                        styleBtn='background'
                        color='black'
                        width={352}
                        style='project_card'>
                        <button>Apply for this position</button>
                    </CustomButton>
                </a>
                {/* Separation */}
                <LinearSeparation />
                <>
                    {/* Job Type */}
                    {opportunity.job_type.name && <>
                        <TitleValue title='Job Type' value={opportunity.job_type.name} />
                    </>}
                    {/* Location */}
                    {opportunity.location && <>
                        <TitleValue title='Location' value={opportunity.location} />
                    </>}
                    {/* Date posted */}
                    {opportunity.created_at && <>
                        <TitleValue title='Date posted' value={new Date(opportunity.created_at).toDateString()} />
                    </>}
                </>
            </CardWithCorner>
        }
        </>
    )
}

export default ProjectCard