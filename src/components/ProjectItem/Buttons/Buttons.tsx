import React, { FunctionComponent } from 'react'
import classes from './Buttons.module.scss'

interface ButtonsProps {
    typeform: string | null,
    name: string | null,
    title: string | null,
    style?: string
}

const Buttons: FunctionComponent<ButtonsProps> = (props) => {
    let rootClasses = [classes.button]
    if (props.style == 'black') {
        rootClasses.push(classes.black)
    }

    return (
        <div className={rootClasses.join(' ')} >
            <button
                data-tf-slider={props.typeform ? props.typeform.toString().split('"')[0] : ''}
                data-tf-width="550"
                data-tf-iframe-props={`title=${props.name}`}
                data-tf-medium="snippet"
                data-tf-hidden="hidden1=xxxxx"
            >
                {props.title}
            </button>
        </div>
    )
}

export default Buttons