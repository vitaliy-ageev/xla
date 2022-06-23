import React, { FunctionComponent } from 'react'
import classes from './Input.module.scss'

interface InputProps {
    label: string,
    type: string,
    name: string,
    placeholder?: string,
    value?: string,
    onChange?: React.ChangeEventHandler
}

const Input: FunctionComponent<InputProps> = (props) => {
    return (
        <div className={classes.container}>
            {/* Label */}
            <label htmlFor={props.name}
                className={classes.container_label}>
                {props.label}
            </label>
            {/* Input */}
            <input type={props.type}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                autoComplete='off'
                onChange={props.onChange}
                className={classes.container_input} />
        </div>
    )
}

export default Input