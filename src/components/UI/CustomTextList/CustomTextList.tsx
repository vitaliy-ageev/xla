import React, { FunctionComponent } from 'react'
import classes from './CustomTextList.module.scss'

interface IList {
    description: string,
    order: number
}

interface CustomTextList {
    title: string,
    list?: IList[]
}

const CustomTextList: FunctionComponent<CustomTextList> = (props) => {
    return (
        <div className={classes.text_list}>
            {/* Title */}
            <span className={classes.text_list_title}>
                {props.title}
            </span>
            {/* List */}
            <div className={classes.text_list_block}>
                {props.list && props.list.map(item =>
                    <div key={item.order} className={classes.text_list_item}>
                        <span className={classes.text_list_item_delimiter}>•</span>
                        <span className={classes.text_list_item_description}>{item.description}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CustomTextList