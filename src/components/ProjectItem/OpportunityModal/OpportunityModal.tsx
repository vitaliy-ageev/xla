import React, { FunctionComponent, MouseEvent, useRef, useEffect } from 'react'
import classes from './OpportunityModal.module.scss'
import { IOpportunity } from '../../../models/IOpportunity'
import Cross from '../../UI/Icons/Cross/Cross';
import Blur from '../../UI/BorderBlur/Blur';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
interface OpportunityModalProps {
    opportunity: IOpportunity | null,
    opportunities: IOpportunity[] | null,
    isOpen: boolean,
    closeModal: () => void
}

const OpportunityModal: FunctionComponent<OpportunityModalProps> = (props) => {
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

    const rootClasses = [classes['opportunity-modal']]

    if (props.isOpen) {
        rootClasses.push(classes['opportunity-modal--open'])
    }

    return (
        <div className={rootClasses.join(' ')} ref={modal}>
            <div className={classes['opportunity-modal__overlay']} ref={overlay} onClick={event => onOverlayClickHandler(event)}>
                <div className={classes['opportunity-modal__container']}>
                    {props.opportunity && (
                        <>
                            <div className={classes['opportunity-modal__header']}>
                                <div className={classes['opportunity-modal__title-wrapper']}>
                                    <h3 className={classes['opportunity-modal__title']}>{props.opportunity.name}</h3>
                                </div>

                                <button className={classes['opportunity-modal__close']} onClick={closeModal}>
                                    <Cross isClose={true} />
                                </button>
                            </div>

                            <div className={classes['opportunity-modal__content']}>
                                {props.opportunity.project.images_url[0] && <div className={classes['opportunity-modal__image-wrapper']}>
                                    <img src={props.opportunity.project.images_url[0]} className={classes['opportunity-modal__image']} width={640} height={390} alt="" />
                                    <Blur />
                                </div>}

                                <p className={classes['opportunity-modal__description']}>{props.opportunity.description}</p>
                            </div>
                        </>
                    )}

                    {props.opportunities && (
                        <div className={classes['opportunity-modal__footer']}>
                            {props.opportunities.map(opportunity => {
                                const buttonClasses = [classes['opportunity-modal__button']]

                                if (opportunity.id === props.opportunity?.id) {
                                    buttonClasses.push(classes['opportunity-modal__button--visible'])
                                }

                                return (
                                    <button
                                        className={buttonClasses.join(' ')}
                                        data-tf-slider={opportunity.typeform_apply_popup ? opportunity.typeform_apply_popup.toString().split('"')[1] : 'VHpdDtau'}
                                        data-tf-width="550"
                                        data-tf-iframe-props={`title=${opportunity.name}`}
                                        data-tf-medium="snippet"
                                        data-tf-hidden="hidden1=xxxxx"
                                    >Apply for this position</button>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default OpportunityModal;
