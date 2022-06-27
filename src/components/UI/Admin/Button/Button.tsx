import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import classes from './Button.module.scss'

interface ButtonProps {
    name: string,
    path: string,
    color: string
}

const Button: FunctionComponent<ButtonProps> = (props) => {
    return (
        <Link to={props.path} className={classes.button}
            style={{ background: `${props.color}` }}>
            {props.name}
        </Link>
    )
}

export default Button