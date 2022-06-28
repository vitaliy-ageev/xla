import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import classes from './Button.module.scss'

interface ButtonProps {
    name: string,
    path: string,
    style: string
}

const Button: FunctionComponent<ButtonProps> = (props) => {
    let rootClasses = [classes.button]
    if (props.style === 'green') {
        rootClasses.push(classes.green)
    } else if (props.style === 'grey') {
        rootClasses.push(classes.grey)
    } else if (props.style === 'red') {
        rootClasses.push(classes.red)
    }

    return (
        <Link to={props.path} className={rootClasses.join(' ')}>
            {props.name}
        </Link>
    )
}

export default Button