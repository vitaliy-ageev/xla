import React, { FunctionComponent, useEffect } from 'react'
import classes from './Steps.module.scss'

interface ISteps {
    id: number,
    title: string,
    description: string,
    isActive: boolean,
}

interface StepProps {
    steps: ISteps[],
    marginTop?: number
    marginBottom?: number,
}

const Steps: FunctionComponent<StepProps> = (props) => {
    useEffect(() => {

    }, [props.steps])
    return (
        <div className={classes.steps}
            style={{
                marginBottom: `${props.marginBottom}px`,
                marginTop: `${props.marginTop}px`
            }}>
            {props.steps.length > 1 && props.steps.map(step =>
                <div key={step.id} className={step.isActive ? [classes.steps_item, classes.active].join(' ')
                    : classes.steps_item}></div>
            )}
        </div>
    )
}

export default Steps