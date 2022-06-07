import React, { FunctionComponent } from 'react'
import UIArrow from '../UI/Icons/Arrows/UIArrow'
import classes from './Breadcrumbs.module.scss'

interface BreadcrumbsProps {

}

const Breadcrumbs: FunctionComponent<BreadcrumbsProps> = (props) => {
    return (
        <div className={classes.breadcrumbs}>
            <div className='container'>
                <div className={classes.breadcrumbs_inner}>
                    <div className={classes.breadcrumbs_item}>
                        <span className={classes.breadcrumbs_item_name}>
                            Main
                        </span>
                        {/* Svg */}
                        <UIArrow />
                    </div>
                    <div className={classes.breadcrumbs_item}>
                        <span className={classes.breadcrumbs_item_name}>
                            Projects
                        </span>
                        {/* Svg */}
                        {/* <UIArrow /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumbs