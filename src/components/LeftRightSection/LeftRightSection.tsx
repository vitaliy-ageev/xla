import React, { FunctionComponent, ReactElement } from 'react'
import classes from './LeftRightSection.module.scss'

interface ILeftRightSection {
    justify?: string,
    children: ReactElement | ReactElement[]
}

const LeftRightSection: FunctionComponent<ILeftRightSection> = ({ justify = 'space-between', children }) => {
    return (
        <div className={classes.left_right_section}
            style={{ justifyContent: `${justify}` }}>
            {children}
        </div>
    )
}

export default LeftRightSection