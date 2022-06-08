import React, { FunctionComponent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { ICategoryFilter } from '../../models/IOpportunity'
import { filterSlice } from '../../store/reducers/filterSlice/filterSlice'
import CardWithCorner from '../UI/CardWithCorner/CardWithCorner'
import classes from './FilterOpportunities.module.scss'

interface FilterOpportunitiesProps {
    category: ICategoryFilter[]

}

const FilterOpportunities: FunctionComponent<FilterOpportunitiesProps> = (props) => {
    const [checkBox, setCheckBox] = useState<number>(0)
    const { setProjectId } = filterSlice.actions;
    const { projectId } = useAppSelector(state => state.filterReducer)
    const dispatch = useAppDispatch();

    const clickCheckBox = (projectId: number) => {
        // e.currentTarget.checked = true;
        setCheckBox(projectId)
    }

    const clickSubmitButton = () => {
        dispatch(setProjectId(checkBox))
    }

    return (
        <CardWithCorner class='filter_opportunities'>
            <div className={classes.filter}>
                {/* Title */}
                <span className={classes.filter_title}>
                    Filter
                </span>
                {/* Input */}
                {/* <input type="text" placeholder='Input mask' className={classes.filter_input} /> */}

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
                                        checked={(checkBox == item.id || projectId == item.id) ? true : false}
                                        onClick={() => clickCheckBox(item.id)}
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
                <button className={classes.filter_button}
                    onClick={clickSubmitButton}
                >
                    Complete
                </button>
            </div>
        </CardWithCorner>
    )
}

export default FilterOpportunities