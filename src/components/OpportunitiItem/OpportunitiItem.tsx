import React, { FunctionComponent } from 'react'
import CustomButton from '../UI/CustomButton/CustomButton'
import CustomTextList from '../UI/CustomTextList/CustomTextList'
import LinearSeparation from '../UI/LinearSeparation/LinearSeparation'
import Background from './Background/Background'
import Description from './Description/Description'
import Header from './Header/Header'

import classes from './OpportunitiItem.module.scss'

const OpportunitiItem: FunctionComponent = () => {
    const ListArr = [
        { id: 1, description: 'Fluent in German (C1 or C2)' },
        { id: 2, description: 'Several years of experience id designing user-friendly, intuitive mobile apps or games' },
        { id: 3, description: 'Convicing portfolio: outstanding visual design and a very good sense for target-group-oriented communication' },
        { id: 4, description: 'Very good conceptual skills and ability to learn quickly' },
        { id: 5, description: 'Good knowledge of Adobe Creative Cloud, Sketch, Figma or comparable tools' },
    ]

    const ListArr1 = [
        { id: 1, description: 'Moving image skills and motion design skills, passion for social media experience on programming / HTML/ CSS' },
    ]

    const ListArr2 = [
        { id: 1, description: 'Secure and permanent full-time job (even in times of corona)' },
        { id: 2, description: 'Wide variety of interesting tasks' },
        { id: 3, description: 'Friendly and dedicated team with flat hierarchies' },
        { id: 4, description: 'Quick, efficient decisions and active participation' },
        { id: 5, description: 'Diverse training and development opportunities' },
        { id: 6, description: 'The most beautiful office in all of Hesse, located in Bad Nauheim (30 minutes from Frankfurt)' },
        { id: 7, description: 'Option to work from home / remotely' },
        { id: 8, description: 'Fun – also outside the office at regular team events' },
    ]

    return (
        <div className={classes.opportuniti_item}>
            {/* Header */}
            <Header title='Senior Product Designer (UX/UI)'
                suptitle='Job Details:'
                image='' />
            {/* Separation */}
            <LinearSeparation class='opportuniti_page' />
            {/* Image */}
            <Background />
            {/* Description */}
            <Description />
            {/* Custom Text List */}
            <CustomTextList title='Your profile:' list={ListArr} />
            {/* Custom button */}
            <CustomTextList title='Optional:' list={ListArr1} />
            {/* Custom button */}
            <CustomTextList title='Benefits:' list={ListArr2} />
            {/* Button */}
            <div className={classes.opportuniti_item_button}>
                <CustomButton
                    styleBtn='background'
                    color='black'
                    width={372}
                    style='opportuniti_apply'>
                    <button>Apply for this position</button>
                </CustomButton>
            </div>
        </div>
    )
}

export default OpportunitiItem