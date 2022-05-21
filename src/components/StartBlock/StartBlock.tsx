import React, { FunctionComponent } from 'react'
import classes from './StartBlock.module.scss'
import BG from '../../img/2.jpeg'
import CustomButton from '../UI/CustomButton/CustomButton'

const StartBlock: FunctionComponent = () => {
    return (
        <div className={classes.start_block}
            style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, .7)), url(${BG}` }}>
            {/* Title */}
            <div className={classes.title}>
                Megamall of opportunities
            </div>
            {/* Subtitle */}
            <div className={classes.subtitle}>
                Build you DAO with the power of X.LA ecosystem
            </div>
            {/* Buttons */}
            <div className={classes.buttons}>
                <CustomButton name='Get started' styleBtn='background' marginR={20} width={320} />
                <CustomButton name='Show all projects' styleBtn='border' width={320} />
            </div>
        </div>
    )
}

export default StartBlock