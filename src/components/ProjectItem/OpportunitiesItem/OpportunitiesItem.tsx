import React, { FunctionComponent } from 'react'
import classes from './OpportunitiesItem.module.scss'

interface IOpportunitiesArr {
    id: number,
    name: string,
    description: string,
    icon: string,
    link: string
}

interface IOpportunitiesItem {
    OpportunitiesArr: IOpportunitiesArr[]
}


const OpportunitiesItem: FunctionComponent<IOpportunitiesItem> = ({ OpportunitiesArr }) => {

    return (
        <div className={classes.opportunities_section}>
            {OpportunitiesArr.map(item =>
                <div key={item.id} className={classes.opportunities_section_item}>
                    {/* Background */}
                    <div className={classes.opportunities_section_item_left_container}>
                        <div className={classes.opportunities_section_item_background}>
                            <div className={classes.opportunities_section_item_background_icon}>
                            </div>
                            <div className={classes.opportunities_section_item_background_corner_upper}></div>
                            <div className={classes.opportunities_section_item_background_corner_down}></div>
                        </div>
                    </div>

                    {/* Desc */}
                    <div className={classes.opportunities_section_item_right_container}>
                        <span className={classes.opportunities_section_item_title}>
                            {item.name}
                            <div className={classes.opportunities_section_item_title_hover} />
                        </span>
                        <span className={classes.opportunities_section_item_description}>
                            {item.description}
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default OpportunitiesItem