import React, { FunctionComponent } from 'react'
import classes from './Description.module.scss'

interface DescriptionProps {
    description: string,
    marginTop?: number,
    marginBottom?: number,
}

const Description: FunctionComponent<DescriptionProps> = (props) => {
    return (
        <h2 className={classes.description}
            style={{
                marginBottom: `${props.marginBottom}px`,
                marginTop: `${props.marginTop}px`
            }}>
            {props.description}
        </h2>
    )
}

export default Description