import React, { FunctionComponent } from 'react'
import { XLA_URL } from '../../../../utils/const'
import classes from './XLA.module.scss'

const XLA: FunctionComponent = (props) => {
    return (
        <a href={XLA_URL}>
            <svg className={classes.xla_logotype} xmlns="http://www.w3.org/2000/svg" width="130" height="40" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8503 0.00976562L21.2637 7.35366H8.99738L1.58398 0.00976562H13.8503ZM41.5066 40L32.4477 31.0219H44.7115L53.7729 40H41.5066Z" fill="#5951F6" />
                <path d="M108.987 0.0660511L109.024 0L99.1978 0.0073387L104.105 9.36456L104.107 9.3719H94.3596L82.632 31.6458H60.7559V0.0073387H40.3457L0 39.978H12.2663L52.302 0.286221V23.3649L60.6427 31.6262L60.7411 31.7289L69.0818 39.9927H88.0064L104.117 9.39147L120.23 39.9878H130L108.987 0.0660511Z" fill="black" />
            </svg>
        </a>
    )
}

export default XLA