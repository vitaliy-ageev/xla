import React, { FunctionComponent } from 'react';
import Blur from '../../ProjectsList/ProjectListItem/Blur/Blur';
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
            <Blur />

        </div>
    )
}

export default CustomBackground