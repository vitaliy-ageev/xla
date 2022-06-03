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
                            Build you DAO with the power of X.LA ecosystem
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className={classes.start_block_buttons}>

                        <CustomButton styleBtn='background' marginR={20} width={320}>
                            <button
                                data-tf-slider="adHiZ5FW"
                                data-tf-width="550"
                                data-tf-iframe-props="title=Registration"
                                data-tf-medium="snippet"
                                data-tf-hidden="hidden1=xxxxx"
                            >
                                Get started
                            </button>
                        </CustomButton>
                        <CustomButton name='' styleBtn='border' width={320}>
                            <button onClick={scrollToBlock}>Show all projects</button>
                        </CustomButton>
                    </div>
                </div>
                <GlowEffect />
            </div>
        </div>
    )
}

export default StartBlock