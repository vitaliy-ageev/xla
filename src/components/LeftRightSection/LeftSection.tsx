import React, { FunctionComponent, ReactElement } from 'react'
import classes from './LeftRightSection.module.scss'

interface ILeftSection {
    width?: string,
    minHeight?: string,
    justify?: string,
    className?: string,
    children: ReactElement | ReactElement[]
}

const LeftSection: FunctionComponent<ILeftSection> = ({ width = '60%', minHeight, justify, children, className }) => {
    let rootClasses = [classes.left_right_section_, classes.left_section]
    if (className == 'opportunities') {
        rootClasses.push(classes.opportunities)
    }

    return (
        <div className={rootClasses.join(' ')}
            style={{
                width: `${width}`,
                minHeight: `${minHeight}`,
                justifyContent: `${justify}`
            }}>
            {children}
        </div >
    )
}

export default LeftSection