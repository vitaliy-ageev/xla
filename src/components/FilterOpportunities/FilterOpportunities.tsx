import React, { FunctionComponent } from 'react'
import CardWithCorner from '../UI/CardWithCorner/CardWithCorner'
import classes from './FilterOpportunities.module.scss'

interface FilterOpportunitiesProps {

}

const FilterOpportunities: FunctionComponent<FilterOpportunitiesProps> = (props) => {
    return (
        <CardWithCorner class='filter_opportunities'>
            <div className={classes.filter}>
                {/* Title */}
                <span className={classes.filter_title}>
                    Filter
                </span>
                {/* Input */}
                <input type="text" placeholder='Input mask' className={classes.filter_input} />

                {/* Category */}
                <div className={classes.filter_checkbox}>
                    <span className={classes.filter_checkbox_title}>
                        Status project
                    </span>
                    <form action="" className={classes.filter_checkbox_block}>
                        <div className={classes.filter_checkbox_block_}>
                            <input type="radio" name="all_projects" checked className={classes.filter_checkbox_block_input} />
                            <label htmlFor="all_projects" className={classes.filter_checkbox_block_label}>All projects</label>
                        </div>

                        <div className={classes.filter_checkbox_block_}>
                            <input type="radio" name="lauched" className={classes.filter_checkbox_block_input} />
                            <label htmlFor="lauched" className={classes.filter_checkbox_block_label}>Launched</label>
                        </div>


                        <div className={classes.filter_checkbox_block_}>
                            <input type="radio" name="developed" className={classes.filter_checkbox_block_input} />
                            <label htmlFor="developed" className={classes.filter_checkbox_block_label}>Developed</label>
                        </div>
                    </form>
                </div>


                {/* Category */}
                <div className={classes.filter_checkbox}>
                    <span className={classes.filter_checkbox_title}>
                        Category
                    </span>
                    <form action="" className={classes.filter_checkbox_block}>
                        <div className={classes.filter_checkbox_block_}>
                            <input type="radio" name="hardware" className={classes.filter_checkbox_block_input} />
                            <label htmlFor="hardware" className={classes.filter_checkbox_block_label}>Hardware</label>
                        </div>

                        <div className={classes.filter_checkbox_block_}>
                            <input type="radio" name="digital services" className={classes.filter_checkbox_block_input} />
                            <label htmlFor="digital services" className={classes.filter_checkbox_block_label}>Digital services</label>
                        </div>


                        <div className={classes.filter_checkbox_block_}>
                            <input type="radio" name="cryptoservice" className={classes.filter_checkbox_block_input} />
                            <label htmlFor="cryptoservice" className={classes.filter_checkbox_block_label}>Cryptoservice</label>
                        </div>

                        <div className={classes.filter_checkbox_block_}>
                            <input type="radio" name="metaverse" className={classes.filter_checkbox_block_input} />
                            <label htmlFor="metaverse" className={classes.filter_checkbox_block_label}>Metaverse</label>
                        </div>

                        <div className={classes.filter_checkbox_block_}>
                            <input type="radio" name="payment_services" className={classes.filter_checkbox_block_input} />
                            <label htmlFor="payment_services" className={classes.filter_checkbox_block_label}>Payment services</label>
                        </div>

                        <div className={classes.filter_checkbox_block_}>
                            <input type="radio" name="ar_metaverse" className={classes.filter_checkbox_block_input} />
                            <label htmlFor="ar_metaverse" className={classes.filter_checkbox_block_label}>AR Metaverse</label>
                        </div>

                        <div className={classes.filter_checkbox_block_}>
                            <input type="radio" name="cloud_game" className={classes.filter_checkbox_block_input} />
                            <label htmlFor="cloud_game" className={classes.filter_checkbox_block_label}>Cloud game</label>
                        </div>
                    </form>
                </div>


                {/* Category */}
                <div className={classes.filter_checkbox}>
                    <span className={classes.filter_checkbox_title}>
                        Location
                    </span>
                    <form action="" className={classes.filter_checkbox_block}>
                        <div className={classes.filter_checkbox_block_}>
                            <input type="radio" name="remote_friendly" checked className={classes.filter_checkbox_block_input} />
                            <label htmlFor="remote_friendly" className={classes.filter_checkbox_block_label}>Remote friendly</label>
                        </div>

                        <div className={classes.filter_checkbox_block_}>
                            <input type="radio" name="office_work" className={classes.filter_checkbox_block_input} />
                            <label htmlFor="office_work" className={classes.filter_checkbox_block_label}>Office work</label>
                        </div>
                    </form>
                </div>

                {/* Category */}
                <div className={classes.filter_checkbox}>
                    <span className={classes.filter_checkbox_title}>
                        Working method
                    </span>
                    <form action="" className={classes.filter_checkbox_block}>
                        <div className={classes.filter_checkbox_block_}>
                            <input type="radio" name="full_time" className={classes.filter_checkbox_block_input} />
                            <label htmlFor="full_time" className={classes.filter_checkbox_block_label}>Full-time</label>
                        </div>

                        <div className={classes.filter_checkbox_block_}>
                            <input type="radio" name="freelance_contract" checked className={classes.filter_checkbox_block_input} />
                            <label htmlFor="freelance_contract" className={classes.filter_checkbox_block_label}>Freelance/Contract</label>
                        </div>
                    </form>
                </div>

                {/* Submit button */}
                <button className={classes.filter_button}>Complete</button>
            </div>
        </CardWithCorner>
    )
}

export default FilterOpportunities