import React, { FunctionComponent, ReactElement } from 'react'
import classes from './BlockWithShadow.module.scss'

interface BlockWithShadowProps {
    children?: ReactElement | ReactElement[]
}

const BlockWithShadow: FunctionComponent<BlockWithShadowProps> = (props) => {
    return (
        <div className={classes.block_with_shadow}>
            {props.children}
        </div>
    )
}

export default BlockWithShadow