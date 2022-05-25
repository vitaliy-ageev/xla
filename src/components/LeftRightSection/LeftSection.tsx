import React, { FunctionComponent, ReactElement } from 'react'
import classes from './LeftRightSection.module.scss'

interface ILeftSection {
    width?: string,
    minHeight?: string,
    justify?: string,
    children: ReactElement | ReactElement[]
}

const LeftSection: FunctionComponent<ILeftSection> = ({ width = '60%', minHeight, justify, children }) => {
    return (
        <div className={[classes.left_right_section_, classes.left_section].join(' ')}
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