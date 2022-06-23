import React, { FunctionComponent, ReactElement } from 'react'
import classes from './Form.module.scss'

interface FormProps {
    action: string,
    children: ReactElement | ReactElement[]
}

const Form: FunctionComponent<FormProps> = (props) => {
    return (
        <form className={classes.form}
            action={props.action}>
            {props.children}
        </form>
    )
}

export default Form