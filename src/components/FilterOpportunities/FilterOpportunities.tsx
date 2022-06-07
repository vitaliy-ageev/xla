import React, { FunctionComponent } from 'react'
import { ICategoryFilter } from '../../models/IOpportunity'
import CardWithCorner from '../UI/CardWithCorner/CardWithCorner'
import classes from './FilterOpportunities.module.scss'

interface FilterOpportunitiesProps {
    category: ICategoryFilter[]

}

const FilterOpportunities: FunctionComponent<FilterOpportunitiesProps> = (props) => {
    const clickCheckBox = (e: any) => {
        e.currentTarget.checked = true;

        console.log("current", e.currentTarget.checked)
    }

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
                {props.category && props.category.map(cat =>
                    <div key={cat.id} className={classes.filter_checkbox}>
                        {cat.category &&
                            <span className={classes.filter_checkbox_title}>
                                {cat.title}
                            </span>
                        }
                        <form action="" className={classes.filter_checkbox_block}>
                            {cat.category?.map(item =>
                                <div key={item.id}
                                    className={classes.filter_checkbox_block_}>
                                    <input type="radio"
                                        name="field"
                                        id={item.key}
                                        checked={cat.isChecked == item.id ? true : false}
                                        // onChange={(e) => clickCheckBox(e)}
                                        className={classes.filter_checkbox_block_input} />
                                    <label htmlFor={item.key} className={classes.filter_checkbox_block_label}>
                                        {item.name}
                                    </label>
                                </div>
                            )}
                        </form>
                    </div>
                )}

                {/* Submit button */}
                <button className={classes.filter_button}>Complete</button>
            </div>
        </CardWithCorner>
    )
}

export default FilterOpportunities