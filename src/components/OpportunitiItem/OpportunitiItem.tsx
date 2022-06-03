import React, { FunctionComponent, useEffect, useState } from 'react'
import CustomButton from '../UI/CustomButton/CustomButton'
import CustomTextList from '../UI/CustomTextList/CustomTextList'
import LinearSeparation from '../UI/LinearSeparation/LinearSeparation'
import Background from './Background/Background'
import Description from './Description/Description'
import Header from './Header/Header'
import { useParams } from 'react-router-dom';
import classes from './OpportunitiItem.module.scss'
import { opportunityAPI } from '../../services/OpportunityService'
import { projectAPI } from '../../services/ProjectService'
import { Embed } from '../../utils/embed'



const OpportunitiItem: FunctionComponent = () => {
    const { id } = useParams()
    const { data: opportunity } = opportunityAPI.useFetchOneOpportunityQuery(`${id}`)
    const { data: project } = projectAPI.useFetchOneProjectQuery(`${opportunity?.project.id}`)
    const { data: skills } = opportunityAPI.useFetchSkillsOpportunityQuery(`${id}`)

    const [thisState, setThisState] = useState(false);

    useEffect(() => {
        Embed()
    }, [thisState])

    const onClickItem = (e: any) => {

        e.preventDefault()
        setThisState(true)
    }

    return (
        <div className={classes.opportuniti_item}>
            {opportunity && <>
                {/* Header */}
                <Header title={opportunity.name}
                    suptitle='Job Details:'
                    image=''
                    name={project?.name} />
                {/* Separation */}
                <LinearSeparation class='opportuniti_page' />
                {/* Image */}
                <Background img={project?.images_url} />
                {/* Description */}
                <Description description={opportunity.description} />
                {/* Custom Text List */}
                {skills?.benefit.toString() && <>
                    <CustomTextList title='Your profile:' list={skills?.profile} />
                </>}
                {/* Custom button */}
                {skills?.benefit.toString() && <>
                    <CustomTextList title='Optional:' list={skills?.optional} />
                </>}
                {/* Custom button */}
                {skills?.benefit.toString() && <>
                    <CustomTextList title='Benefits:' list={skills?.benefit} />
                </>}

                {/* Button */}
                <div className={classes.opportuniti_item_button}>
                    <CustomButton
                        styleBtn='background'
                        color='black'
                        width={372}
                        style='opportuniti_apply'>
                        <button
                            data-tf-slider={opportunity.typeform_popup ? opportunity.typeform_popup.toString().split('"')[1] : 'VHpdDtau'}
                            data-tf-width="550"
                            data-tf-iframe-props={`title=${opportunity.name}`}
                            data-tf-medium="snippet"
                            data-tf-hidden="hidden1=xxxxx"

                            onClick={(e) => onClickItem(e)}
                        >Apply for this position</button>
                    </CustomButton>
                </div>
            </>
            }

        </div >
    )
}

export default OpportunitiItem