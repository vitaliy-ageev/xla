import React, { FunctionComponent } from 'react'
import classes from './Description.module.scss'

interface DescriptionProps {
    desciption: string | null
}

const Description: FunctionComponent<DescriptionProps> = (props) => {
    return (
        <>
            {props.desciption &&
                <div className={classes.description}>
                    {props.desciption}
                </div>
            }
        </>
    )
}

export default Description