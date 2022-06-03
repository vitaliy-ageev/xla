import React, { FunctionComponent, ReactElement } from 'react'
import classes from './LeftRightSection.module.scss'

interface IRightSection {
    width?: string,
    minHeight?: string,
    justify?: string,
    alignItems?: string,
    className?: string,
    children: ReactElement | ReactElement[]
}

const RightSection: FunctionComponent<IRightSection> = ({ width = '30%', minHeight, justify, alignItems, children, className }) => {
    let rootClasses = [classes.left_right_section_, classes.right_section]
    if (className == 'opportunities') {
        rootClasses.push(classes.opportunities)
    }

    return (
        <div className={rootClasses.join(' ')}
            style={{
                width: `${width}`,
                minHeight: `${minHeight}`,
                justifyContent: `${justify}`,
                alignItems: `${alignItems}`
            }}>
            {children}
        </div>
    )
}

export default RightSection