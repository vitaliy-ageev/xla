import React, { FunctionComponent } from 'react'
import classes from './CustomTextList.module.scss'

interface IList {
    id: number,
    description: string
}

interface CustomTextList {
    title: string,
    list: IList[]
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
                {props.list.map(item =>
                    <div key={item.id} className={classes.text_list_item}>
                        <span className={classes.text_list_item_delimiter}>•</span>
                        <span className={classes.text_list_item_description}>{item.description}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CustomTextList