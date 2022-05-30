import React, { FunctionComponent } from 'react'
import CustomBackground from '../../UI/CustomBackground/CustomBackground'
import CustomButton from '../../UI/CustomButton/CustomButton'
import classes from './Header.module.scss'

interface HeaderProps {
    title: string,
    suptitle: string,
    image: string,
}

const Header: FunctionComponent<HeaderProps> = (props) => {
    return (
        <div className={classes.opportuniti_header}>
            <div className={classes.opportuniti_header_left_container}>
                {/* Custom Background */}
                <CustomBackground class='opportuniti_page' />
            </div>
            <div className={classes.opportuniti_header_right_container}>
                {/* Suptitle */}
                <h2 className={classes.opportuniti_header_suptitle}>
                    {props.suptitle}
                </h2>
                {/* Title */}
                <h1 className={classes.opportuniti_header_title}>
                    {props.title}
                </h1>
                {/* Buttons */}
                <div className={classes.opportuniti_header_buttons}>
                    <CustomButton name='Share'
                        styleBtn='border'
                        color='black'
                        width={140}
                        marginR={20}
                    />
                    <CustomButton name='Tweet'
                        styleBtn='border'
                        color='black'
                        width={140}
                        marginR={20}
                    />
                    <CustomButton name='Copy'
                        styleBtn='border'
                        color='black'
                        width={140}
                        marginR={20}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header