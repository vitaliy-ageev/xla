import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import Cross from '../UI/Icons/Cross/Cross'
import classes from './FAQ.module.scss'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

interface IFAQItems {
    id: number,
    title: string,
    description: string
}

interface IFAQ {
    IFAQItems: IFAQItems[]
}

const FAQ: FunctionComponent<IFAQ> = ({ IFAQItems }) => {
    const [currItem, setCurrItem] = useState(true);

    let rootClasses = [classes.faq_item]
    const clickItem = () => {
        setCurrItem(true)
        if (currItem) {
            setCurrItem(false)
            rootClasses = [classes.faq_item]

        } else {
            setCurrItem(true)
            rootClasses.push(classes.active)
        }
    }

    return (
        <div className={classes.faq}>
            {IFAQItems.map(item =>
                <Accordion square className={rootClasses.join(' ')} onChange={() => setCurrItem(true)}
                    style={currItem ? { border: `2px solid #000 !important` } : {}}>
                    <div className={rootClasses.join(' ')} style={currItem ? { border: `2px solid #000 !important` } : {}}>
                        <AccordionSummary>
                            <div className={classes.faq_item_title_block} >
                                <span className={classes.faq_item_title}>
                                    {item.title}
                                </span>
                                <Cross />
                            </div>
                        </AccordionSummary>
                    </div>

                    <AccordionDetails className={classes.faq_item_description}>
                        <Typography >
                            <div >
                                <p>
                                    {item.description}
                                </p>
                            </div>
                        </Typography>

                    </AccordionDetails>

                </Accordion>
            )}
        </div>
    )
}

export default FAQ