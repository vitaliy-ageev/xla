import React, { FunctionComponent } from 'react'
import classes from './TitleSection.module.scss'
import BG from '../../assets/images/2.jpeg'
import GlowEffect from '../UI/GlowEffect/GlowEffect'

const TitleSection: FunctionComponent = () => {
    return (
        <div className={classes.title_section}
            style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, .7)), url(${BG}` }}>
            <div className='container'>
                <div className={classes.title_section_inner}>
                    <div className={classes.title_section_title_block}>
                        <h1 className={classes.title_section_title}>
                            Opportunities
                        </h1>
                        <h2 className={classes.title_section_subtitle}>
                            Search for various job positions, contractors, vendors or services Metamall projects are seeking
                        </h2>
                    </div>
                </div>
                <GlowEffect />
            </div>
        </div>
    )
}

export default TitleSection