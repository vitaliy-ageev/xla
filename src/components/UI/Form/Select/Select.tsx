import React, { FunctionComponent } from 'react'
import classes from './Select.module.scss'

interface IOtions {
    id: number,
    name: string,
    key?: string
}

interface SelectProps {
    label: string,
    name: string,
    placeholder: string,
    options: IOtions[]
}

const Select: FunctionComponent<SelectProps> = (props) => {
    return (
        <div className={classes.container}>
            {/* Label */}
            <label htmlFor={props.name}
                className={classes.container_label}>
                {props.label}
            </label>
            {/* Select */}
            <select className={classes.container_select}
                name={props.name}
                required
            >
                <option className={[classes.container_option, classes.placeholder].join(' ')}
                    value=""
                    selected
                    disabled>
                    {props.placeholder}
                </option>
                {props.options.map(item =>
                    <option key={item.id} className={classes.container_option}
                        value={item.name}>
                        {item.name}
                    </option>
                )}
            </select>
        </div>
    )
}

export default Select