import React, { FunctionComponent } from 'react'
import { FieldError } from 'react-hook-form'
import classes from './Input.module.scss'

interface InputProps {
    label: string,
    type: string,
    name: string,
    placeholder?: string,
    value?: string,
    min?: string,
    max?: string,
    pattern?: string,
    onChange?: React.ChangeEventHandler,
    onBlur?: React.FocusEventHandler
    error?: string,
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
                min={props.min}
                max={props.max}
                placeholder={props.placeholder}
                autoComplete='off'
                onChange={props.onChange}
                onBlur={props.onBlur}
                className={classes.container_input} />
            <div style={{ color: 'red' }}>
                {props.error && <>{props.error}</>}
            </div>
        </div>
    )
}

export default Input