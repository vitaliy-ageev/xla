import React, { FunctionComponent } from 'react'
import classes from './Cross.module.scss'


const Cross: FunctionComponent = () => {
    return (
        <svg className={classes.cross} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 0.5H15.5V12.5H12.5V0.5ZM12.5 15.5L0.5 15.5V12.5L12.5 12.5V15.5ZM15.5 15.5V27.5H12.5V15.5H15.5ZM15.5 15.5V12.5L27.5 12.5V15.5H15.5Z" />
        </svg>
    )
}

export default Cross