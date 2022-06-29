import React, { FunctionComponent } from 'react'
import classes from './Textarea.module.scss'

interface TextareaProps {
    label: string,
    name: string,
    placeholder: string,
    rows?: number,
    cols?: number,
    maxLength: number,
    onChange?: React.ChangeEventHandler,
    onBlur?: React.FocusEventHandler,
    error?: string,
}

const Textarea: FunctionComponent<TextareaProps> = (props) => {
    return (
        <div className={classes.container}>
            {/* Label */}
            <label htmlFor={props.name}
                className={classes.container_label}>
                {props.label}
            </label>
            {/* Text Area */}
            <textarea className={classes.container_textarea}
                name={props.name}
                rows={props.rows}
                cols={props.cols}
                maxLength={props.maxLength}
                placeholder={props.placeholder}
                onChange={props.onChange}
                onBlur={props.onBlur}>
            </textarea>
            <div style={{ color: 'red' }}>
                {props.error && <>{props.error}</>}
            </div>
        </div>
    )
}

export default Textarea