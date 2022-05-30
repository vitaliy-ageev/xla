import React, { FunctionComponent } from 'react';
import classes from './CustomBackground.module.scss'

interface CustomBackgroundProps {
    class?: string
}

const CustomBackground: FunctionComponent<CustomBackgroundProps> = (props) => {
    let rootClasses = [classes.custom_background]
    if (props.class == 'opportuniti_page') {
        rootClasses.push(classes.opportuniti_page)
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={classes.custom_background_img}></div>
            <div className={classes.custom_background_inner}></div>
        </div>
    )
}

export default CustomBackground