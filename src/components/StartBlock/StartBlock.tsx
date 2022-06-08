import React, { FunctionComponent } from 'react'
import classes from './StartBlock.module.scss'
import BG from '../../assets/images/2.jpeg'
import CustomButton from '../UI/CustomButton/CustomButton'
import GlowEffect from '../UI/GlowEffect/GlowEffect'
import { useAppSelector } from '../../hooks/hooks'

interface StartBlockProps {
}

const StartBlock: FunctionComponent<StartBlockProps> = (props) => {

    const { isScroll } = useAppSelector(state => state.generalReducer)
    const scrollToBlock = () => {
        document.querySelector('html')?.classList.add('scroll')
        setTimeout(() => {
            window.scrollTo(0, Number(isScroll))
            document.querySelector('html')?.classList.remove('scroll')
        }, 100)
    }

    return (
        <div className={classes.start_block}
            style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, .7)), url(${BG}` }}>
            <div className='container'>
                <div className={classes.start_block_inner}>
                    <div className={classes.start_block_title_container}>
                        {/* Title */}
                        <div className={classes.start_block_title}>
                            Metamall of opportunities
                        </div>
                        {/* Subtitle */}
                        <div className={classes.start_block_subtitle}>
                            Build your product with the power of X.LA community
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className={classes.start_block_buttons}>

                        <div className={classes.start_block_button}>
                            <button
                                data-tf-slider="adHiZ5FW"
                                data-tf-width="550"
                                data-tf-iframe-props="title=Registration"
                                data-tf-medium="snippet"
                                data-tf-hidden="hidden1=xxxxx"
                            >
                                Get started
                            </button>
                        </div>
                        <div className={classes.start_block_button}>
                            <button onClick={scrollToBlock}>Show all projects</button>
                        </div>
                    </div>
                </div>
                <GlowEffect />
            </div>
        </div>
    )
}

export default StartBlock