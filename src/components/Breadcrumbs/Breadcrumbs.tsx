import React, { FunctionComponent } from 'react'
import UIArrow from '../UI/Icons/Arrows/UIArrow'
import classes from './Breadcrumbs.module.scss'
import { Link } from 'react-router-dom'
import path from 'path'

interface BreadcrumbsProps {
    location: string,
    path: string
}

const Breadcrumbs: FunctionComponent<BreadcrumbsProps> = (props) => {
    return (
        <div className={classes.breadcrumbs}>
            <div className='container'>
                <div className={classes.breadcrumbs_inner}>
                    {props.location && props.location.split('/').map(loc =>
                        <Link to='/' className={classes.breadcrumbs_item}>
                            <span className={classes.breadcrumbs_item_name}>
                                {loc}
                            </span>
                            {/* Svg */}
                            <UIArrow />
                        </Link>
                    )}
                </div>
            </div>
        </div >
    )
}

export default Breadcrumbs