import React, { FunctionComponent, MouseEvent, useRef, useEffect } from 'react'
import classes from './UpdatesModal.module.scss'
import { IUpdates } from '../../../models/IProject';
import Cross from '../../UI/Icons/Cross/Cross';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

interface UpdatesModalProps {
    updates: IUpdates[],
    isOpen: boolean,
    closeModal: () => void
}

const UpdatesModal: FunctionComponent<UpdatesModalProps> = (props) => {
    const modal: any = useRef(null); // TODO: Can't set types expected by body-scroll-lock lib.
    const overlay = useRef<HTMLDivElement>(null);

    useEffect(() => {
        props.isOpen ? disableBodyScroll(modal) : enableBodyScroll(modal)

        return () => {
            clearAllBodyScrollLocks()
        }
    }, [props.isOpen])

    const closeModal = () => {
        props.closeModal()
    }

    const onOverlayClickHandler = (event: MouseEvent) => {
        if (event.target === overlay.current) {
            closeModal()
        }
    }

    const rootClasses = [classes['updates-modal']]

    if (props.isOpen) {
        rootClasses.push(classes['updates-modal--open'])
    }

    return (
        <div className={rootClasses.join(' ')} ref={modal}>
            <div className={classes['updates-modal__overlay']} ref={overlay} onClick={event => onOverlayClickHandler(event)}>
                <div className={classes['updates-modal__container']}>
                    <div className={classes['updates-modal__header']}>
                        <div className={classes['updates-modal__title-wrapper']}>
                            <h3 className={classes['updates-modal__title']}>Recent Updates</h3>
                        </div>

                        <button className={classes['updates-modal__close']} onClick={closeModal}>
                            <Cross isClose={true} />
                        </button>
                    </div>

                    <div className={classes['updates-modal__content']}>
                        <ul className={classes['updates-modal__list']}>
                            {props.updates?.map(update => (
                                <li className={[classes['updates-modal__item'], classes['update-item']].join(' ')}>
                                    <div className={classes['update-item__header']}>
                                        <h4 className={classes['update-item__title']}>{update.version}</h4>
                                        <span className={classes['update-item__date']}>{update.created_at}</span>
                                    </div>

                                    <p className={classes['update-item__description']}>{update.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdatesModal;
