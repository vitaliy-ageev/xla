import React, { FunctionComponent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RouteNames } from '../../routes/routes'
import { opportunityAPI } from '../../services/OpportunityService'
import { Embed } from '../../utils/embed'
import CardWithCorner from '../UI/CardWithCorner/CardWithCorner'
import CustomButton from '../UI/CustomButton/CustomButton'
import LinearSeparation from '../UI/LinearSeparation/LinearSeparation'
import classes from './ProjectCard.module.scss'
import TitleValue from './TitleValue/TitleValue'

const ProjectCard: FunctionComponent = () => {
    const { id } = useParams()
    const { data: opportunity } = opportunityAPI.useFetchOneOpportunityQuery(`${id}`)

    const [thisState, setThisState] = useState(false);

    useEffect(() => {
        Embed()
    }, [thisState])

    const onClickItem = (e: any) => {

        e.preventDefault()
        setThisState(true)
    }


    return (
        <>{opportunity &&
            <CardWithCorner class='project_card'>
                {/* Name project */}
                <span className={classes.project_card_name}>
                    {opportunity.name}
                </span>
                {/* Link */}
                <>
                    {opportunity.project.url &&
                        < a href={opportunity.project.url ? opportunity.project.url : RouteNames.MAIN} target='_blank' className={classes.project_card_link}>
                            Visit Website
                        </a>
                    }
                </>
                {/* Button */}
                <CustomButton
                    styleBtn='background'
                    color='black'
                    style='project_card'>
                    <button
                        data-tf-slider={opportunity.typeform_apply_popup ? opportunity.typeform_apply_popup.toString().split('"')[1] : 'VHpdDtau'}
                        data-tf-width="550"
                        data-tf-iframe-props={`title=${opportunity.name}`}
                        data-tf-medium="snippet"
                        data-tf-hidden="hidden1=xxxxx"
                        onClick={(e) => onClickItem(e)}
                    >Apply to this opportunity</button>
                </CustomButton>
                {/* Separation */}
                <LinearSeparation />
                <>
                    {/* Job Type */}
                    {opportunity.job_type.name && <>
                        <TitleValue title='Job Type' value={opportunity.job_type.name} />
                    </>}
                    {/* Location */}
                    {opportunity.working_mode.name && <>
                        <TitleValue title='Working mode' value={opportunity.working_mode.name} />
                    </>}
                    {/* Date posted */}
                    {opportunity.created_at && <>
                        {/* <TitleValue title='Date posted' value={new Date(opportunity.created_at).toDateString()} /> */}
                    </>}
                </>
            </CardWithCorner>
        }
        </>
    )
}

export default ProjectCard