import React, { FunctionComponent } from 'react'
import classes from './LinearSeparation.module.scss'

interface LinearSeparationProps {
    class?: string
}

const LinearSeparation: FunctionComponent<LinearSeparationProps> = (props) => {
    let rootClasses = [classes.linear_separation]
    if (props.class == 'opportuniti_page') {
        rootClasses.push(classes.opportuniti_page)
    }
    return (
        <div className={rootClasses.join(' ')} />
    )
}

export default LinearSeparation