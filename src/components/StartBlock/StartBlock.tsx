import React, { FunctionComponent } from 'react'
import classes from './StartBlock.module.scss'
import BG from '../../assets/images/2.jpeg'
import CustomButton from '../UI/CustomButton/CustomButton'
import GlowEffect from '../UI/GlowEffect/GlowEffect'

const StartBlock: FunctionComponent = () => {
    return (
        <div className={classes.start_block}
            style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, .7)), url(${BG}` }}>
            <div className={classes.start_block_inner}>
                {/* Title */}
                <div className={classes.start_block_title}>
                    Megamall of opportunities
                </div>
                {/* Subtitle */}
                <div className={classes.start_block_subtitle}>
                    Build you DAO with the power of X.LA ecosystem
                </div>
                {/* Buttons */}
                <div className={classes.start_block_buttons}>
                    <CustomButton name='Get started' styleBtn='background' marginR={20} width={320} />
                    <CustomButton name='Show all projects' styleBtn='border' width={320} />
                </div>
            </div>
            <GlowEffect />
        </div>
    )
}

export default StartBlock