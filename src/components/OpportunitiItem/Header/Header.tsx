import React, { FunctionComponent } from 'react'
import CustomBackground from '../../UI/CustomBackground/CustomBackground'
import CustomButton from '../../UI/CustomButton/CustomButton'
import Copy from '../../UI/Icons/Copy/Copy'
import Facebook from '../../UI/Icons/Social/Facebook'
import Twitter from '../../UI/Icons/Social/Twitter'
import classes from './Header.module.scss'

interface HeaderProps {
    title: string,
    suptitle: string,
    image: string,
    name?: string
}

const Header: FunctionComponent<HeaderProps> = (props) => {
    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href)
    }

    return (
        <div className={classes.opportuniti_header}>
            <div className={classes.opportuniti_header_left_container}>
                {/* Custom Background */}
                <CustomBackground class='opportuniti_page' name={props.name} />
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
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank"
                        className={classes.share_facebook} >
                        <CustomButton
                            styleBtn='border'
                            color='black'
                            marginR={20}
                            style='opportunity_header'
                        >
                            <button>
                                <Facebook />
                                Share
                            </button>
                        </CustomButton>
                    </a>


                    <a href={`http://twitter.com/share?text=${window.location.href}`} target="_blank"
                        className={classes.share_twitter}>
                        <CustomButton
                            styleBtn='border'
                            color='black'
                            marginR={20}
                            style='opportunity_header'
                        ><button>
                                <Twitter />
                                Tweet
                            </button>
                        </CustomButton>
                    </a>

                    <div className={classes.copy_link}>
                        <CustomButton
                            styleBtn='border'
                            color='black'
                            marginR={20}
                            style='opportunity_header'
                        >
                            <button onClick={copyLink}>
                                <Copy />
                                Copy
                            </button>
                        </CustomButton>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header