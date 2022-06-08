import React, { FunctionComponent } from 'react';
import classes from './CustomBackground.module.scss'
interface CustomBackgroundProps {
    class?: string,
    logotype?: string
}

const CustomBackground: FunctionComponent<CustomBackgroundProps> = (props) => {
    let rootClasses = [classes.custom_background]
    if (props.class == 'opportuniti_page') {
        rootClasses.push(classes.opportuniti_page)
    }

    return (
        <div className={rootClasses.join(' ')} style={{
            background: `url(${props.logotype})`
        }}>
            {/* <div className={classes.custom_background_img} ></div> */}

        </div>
    )
}

export default CustomBackground