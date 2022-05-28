import React, { FunctionComponent } from 'react'
import classes from './Location.module.scss'

const Location: FunctionComponent = () => {
    return (
        <svg className={classes.location} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.88383 2.08857L6.99967 1.16602L4.11552 2.08857L2.33301 4.50385V7.48929L3.20801 9.38709L6.99967 12.8327L10.4997 9.38709L11.6663 7.48929V4.50385L9.88383 2.08857ZM6.99968 7.48546C7.94922 7.48546 8.71898 6.72372 8.71898 5.78407C8.71898 4.84442 7.94922 4.08268 6.99968 4.08268C6.05014 4.08268 5.28038 4.84442 5.28038 5.78407C5.28038 6.72372 6.05014 7.48546 6.99968 7.48546Z" fill="black" />
        </svg>
    )
}

export default Location