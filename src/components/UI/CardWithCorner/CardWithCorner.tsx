import React, { FunctionComponent, ReactElement } from 'react'
import classes from './CardWithCorner.module.scss'

interface CardWithCornerProps {
    class?: string,
    children: ReactElement | ReactElement[]
}

const CardWithCorner: FunctionComponent<CardWithCornerProps> = (props) => {
    let rootClasses = [classes.card_with_corner]
    if (props.class == 'project_card') {
        rootClasses.push(classes.project_card)
    } else if (props.class == 'filter_opportunities') {
        rootClasses.push(classes.filter_opportunities)
    }

    return (
        <div className={rootClasses.join(' ')}>
            {props.children}
            <div className={classes.card_with_corner_upper} />
            <div className={classes.card_with_corner_down} />
        </div>
    )
}

export default CardWithCorner