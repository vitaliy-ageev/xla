import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import Cross from '../UI/Icons/Cross/Cross'
import classes from './FAQ.module.scss'

interface IFAQItems {
    id: number,
    title: string,
    description: string
}

interface IFAQ {
    IFAQItems: IFAQItems[]
}

const FAQ: FunctionComponent<IFAQ> = ({ IFAQItems }) => {
    const [currItem, setCurrItem] = useState(false);
    const clickItem = (e: any) => {
        setCurrItem(true);

        if (currItem) {
            setCurrItem(false)
            e.currentTarget.className = classes.faq_item
        } else {
            setCurrItem(true)
            e.currentTarget.className += ' ' + classes.active
        }
    }

    return (
        <div className={classes.faq}>
            {IFAQItems.map(item =>
                <div key={item.id} className={classes.faq_item} onClick={(e) => clickItem(e)}>
                    <div className={classes.faq_item_title_block}>
                        <span className={classes.faq_item_title}>
                            {item.title}
                        </span>
                        <Cross />
                    </div>
                    <div className={classes.faq_item_description}>
                        <p>
                            {item.description}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FAQ