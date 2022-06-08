import React, { FunctionComponent, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Navigate, useNavigate } from 'react-router-dom'
import { Embed } from '../../../utils/embed'
import classes from './Buttons.module.scss'

interface ButtonsProps {
    typeform?: string | null,
    name?: string | null,
    title: string | null,
    style?: string,
    url?: string
}

const Buttons: FunctionComponent<ButtonsProps> = (props) => {
    let rootClasses = [classes.button]
    if (props.style == 'black') {
        rootClasses.push(classes.black)
    }

    setTimeout(() => {
        Embed()
    }, 10)

    let navigate = useNavigate();

    return (
        <div className={rootClasses.join(' ')}>
            <a href={props.url} target="_blank" >
                <button
                    data-tf-slider={props.typeform ? props.typeform.toString().split('"')[1] : ''}
                    data-tf-width="550"
                    data-tf-iframe-props={`title=${props.name}`}
                    data-tf-medium="snippet"
                    data-tf-hidden="hidden1=xxxxx"
                >
                    {props.title}

                </button>
            </a>
        </div>
    )
}

export default Buttons