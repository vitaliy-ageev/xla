import React, { FunctionComponent } from 'react'
import classes from './Title.module.scss'
interface TitleProps {
    title: string,
    link?: string,
    onLinkClick?: () => void
}

const Title: FunctionComponent<TitleProps> = (props) => {
    return (
        <div className={classes.block}>
            <h3 className={classes.block_title}>
                {props.title}
            </h3>

            {
                props.link
                    ? <button className={classes.block_link} onClick={props.onLinkClick}>
                        {props.link}
                    </button>
                    : null
            }
        </div>
    )
}

export default Title
