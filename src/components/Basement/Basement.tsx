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
                            <a href="https://assets.website-files.com/61fbe6743549d73f922458c1/6274e4b697b7fb0005e12d1a_Privacy%20and%20Cookies%20Policy%20X.LA.pdf"
                                className={classes.basement_documents_link}
                                target="_blank">
                                Privacy policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Basement