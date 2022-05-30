import React, { FunctionComponent } from 'react'
import CardWithCorner from '../UI/CardWithCorner/CardWithCorner'
import CustomButton from '../UI/CustomButton/CustomButton'
import LinearSeparation from '../UI/LinearSeparation/LinearSeparation'
import classes from './ProjectCard.module.scss'
import TitleValue from './TitleValue/TitleValue'

const ProjectCard: FunctionComponent = () => {
    return (
        <CardWithCorner class='project_card'>
            {/* Name project */}
            <span className={classes.project_card_name}>
                Name project
            </span>
            {/* Link */}
            <a href="/" target='_blank' className={classes.project_card_link}>
                Visit Website
            </a>
            {/* Button */}
            <CustomButton
                styleBtn='background'
                color='black'
                width={352}
                style='project_card'>
                    <button>Apply for this position</button>
                </CustomButton>
            {/* Separation */}
            <LinearSeparation />
            <>
                {/* Job Type */}
                <TitleValue title='Job Type' value='Full-time' />
                {/* Location */}
                <TitleValue title='Location' value='Frankfurt am Main' />
                {/* Date posted */}
                <TitleValue title='Date posted' value='May 01, 2022' />
            </>
        </CardWithCorner>
    )
}

export default ProjectCard