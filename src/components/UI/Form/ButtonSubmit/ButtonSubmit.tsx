import React, { ButtonHTMLAttributes, FunctionComponent } from 'react'
import classes from './ButtonSubmit.module.scss'

interface ButtonSubmitProps {
    name: string,
    type: string,
    onClick?: React.MouseEventHandler
}

const ButtonSubmit: FunctionComponent<ButtonSubmitProps> = (props) => {
    return (
        <button className={classes.button_submit}
            type={props.type == "button" ? `button` : props.type == "submit" ? `submit` : `reset`}
            onClick={props.onClick}>
            {props.name}
        </button >
    )
}

export default ButtonSubmit