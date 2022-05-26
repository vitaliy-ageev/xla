import React, { FunctionComponent } from 'react'
import classes from './Basement.module.scss'

const Basement: FunctionComponent = () => {
    return (
        <div className={classes.basement}>
            <div className='container'>
                <div className={classes.basement_inner}>
                    <div className={classes.basement_left_container}>
                        {/* Information */}
                        <span className={classes.basement_company_information}>
                            Copyright © 2022 X.LA . All Rights Reserved
                        </span>

                    </div>
                    <div className={classes.basement_right_container}>
                        {/* Links */}
                        <div className={classes.basement_documents}>
                            <span className={classes.basement_documents_link}>
                                Privacy policy
                            </span>
                            <span className={classes.basement_documents_link}>
                                Teams and Conditions
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Basement