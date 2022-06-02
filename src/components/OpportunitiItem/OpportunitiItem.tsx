import React, { FunctionComponent } from 'react'
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


import Babka from '../../../assets/images/logo_projects/Babka.svg'
import GameInvest from '../../../assets/images/logo_projects/GameInvest.svg'
import Metaverse from '../../../assets/images/logo_projects/Metaverse.svg'
import Multiverse from '../../../assets/images/logo_projects/Multiverse.svg'
import Store3 from '../../../assets/images/logo_projects/Store3.svg'
import UserEx from '../../../assets/images/logo_projects/UserEx.svg'
import XLACard from '../../../assets/images/logo_projects/XLACard.svg'
import Web3 from '../../../assets/images/logo_projects/Web3.svg'
import PlayEarn from '../../../assets/images/logo_projects/PlayEarn.svg'

const OpportunitiItem: FunctionComponent = () => {
    const { id } = useParams()
    const { data: opportunity } = opportunityAPI.useFetchOneOpportunityQuery(`${id}`)
    const { data: project } = projectAPI.useFetchOneProjectQuery(`${opportunity?.project.id}`)
    const { data: skills } = opportunityAPI.useFetchSkillsOpportunityQuery(`${id}`)

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
                    <a href={opportunity.typeform_url?.toString()} target="_blank">
                        <CustomButton
                            styleBtn='background'
                            color='black'
                            width={372}
                            style='opportuniti_apply'>
                            <button>Apply for this position</button>
                        </CustomButton>
                    </a>
                </div>
            </>
            }

        </div >
    )
}

export default OpportunitiItem