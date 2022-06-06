import React, { FunctionComponent } from 'react'
import { IUpdates } from '../../../models/IProject'
import classes from './RecentUpdates.module.scss'

interface RecentUpdatesProps {
    updates: IUpdates[]
}

const RecentUpdates: FunctionComponent<RecentUpdatesProps> = (props) => {
    return (
        <div className={classes.recent_updates}>
            <div className={classes.recent_updates_title_block}>
                <h3 className={classes.recent_updates_title}>
                    {props.updates.slice(0, 1)[0].version}
                </h3>
                <span className={classes.recent_updates_data}>
                    {props.updates.slice(0, 1)[0].created_at}
                </span>
            </div>
            {/* Text */}
            <div className={classes.recent_updates_text}>
                <p>
                    {props.updates.slice(0, 1)[0].description}
                </p>
            </div>
        </div>
    )
}

export default RecentUpdates