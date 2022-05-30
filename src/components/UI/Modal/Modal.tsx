import React, { FunctionComponent, ReactElement } from 'react'
import classes from './Modal.module.scss'

interface ModalProps {
    viewModal: boolean,
    children?: ReactElement | ReactElement[]
}

const Modal: FunctionComponent<ModalProps> = (props) => {
    let rootClasses = [classes.modal];
    if (props.viewModal) {
        rootClasses.push(classes.active)
    } else {
        rootClasses = [classes.modal]
    }

    return (
        <div className={rootClasses.join(' ')} onClick={(e) => e.stopPropagation()}>
            <div className={classes.modal_container} >
                {props.children}
            </div>
        </div >
    )
}

export default Modal