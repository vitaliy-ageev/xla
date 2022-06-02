import React, { FunctionComponent } from 'react'
import classes from './Description.module.scss'

interface DescriptionProps {
    description: string
}

const Description: FunctionComponent<DescriptionProps> = (props) => {
    return (
        <div className={classes.description_block}>
            {props.description}
        </div>
    )
}

export default Description