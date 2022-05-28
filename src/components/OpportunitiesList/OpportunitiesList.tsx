import React, { FunctionComponent } from 'react'
import CustomButton from '../UI/CustomButton/CustomButton'
import Location from '../UI/Icons/Location/Location'
import classes from './OpportunitiesList.module.scss'

interface OpportunitiesItems {
    id: number,
    name: string,
    project: string,
    type: string,
    method: string,
    location: string,
    data: string,
    image: string,
    link: string,
}

interface IOpportunitiesList {
    OpportunitiesItems: OpportunitiesItems[]
}

const OpportunitiesList: FunctionComponent<IOpportunitiesList> = ({ OpportunitiesItems }) => {
    return (
        <div className={classes.opportunities_list}>
            {OpportunitiesItems.map(item =>
                <div key={item.id} className={classes.opportunities_list_item}>
                    <div className={classes.opportunities_list_item_left}>
                        {/* Background */}
                        <div className={classes.opportunities_list_item_background}>
                            <div className={classes.opportunities_list_item_background_img}></div>
                        </div>
                    </div>
                    <div className={classes.opportunities_list_item_right}>
                        <div className={classes.opportunities_list_item_container_left}>
                            {/* Title */}
                            <span className={classes.opportunities_list_item_title}>
                                {item.name}
                            </span>
                            <span className={classes.opportunities_list_item_tags_container}>
                                {/* Tags */}
                                <span className={classes.opportunities_list_item_name_project}>
                                    {item.project}
                                </span>
                                <div className={classes.opportunities_list_item_delimiter}></div>
                                <span className={classes.opportunities_list_item_type}>
                                    {item.type}
                                </span>
                                <div className={classes.opportunities_list_item_delimiter}></div>
                                <span className={classes.opportunities_list_item_method}>
                                    {item.method}
                                </span>
                            </span>
                            <div className={classes.opportunities_list_item_hover}></div>
                        </div>
                        <div className={classes.opportunities_list_item_container_right}>
                            {/* Lication & Data */}
                            <div className={classes.opportunities_list_item_location_block}>
                                <span className={classes.opportunities_list_item_location}>
                                    <Location />
                                    <span>{item.location}</span>
                                </span>
                                <span className={classes.opportunities_list_item_data}>
                                    {item.data}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.opportunities_list_item_buttons}>
                        <CustomButton name='View offer' styleBtn='border' marginR={20} width={200} color='black' style='opportunities_list' />
                        <CustomButton name='Apply now' styleBtn='border' width={200} color='black' style='opportunities_list' />
                    </div>
                </div>
            )}
        </div>
    )
}

export default OpportunitiesList