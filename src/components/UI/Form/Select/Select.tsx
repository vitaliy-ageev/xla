import React, { FunctionComponent } from 'react'
import classes from './Select.module.scss'

interface IOptions {
    id: number,
    name: string,
    key?: string
}

interface SelectProps {
    label: string,
    name: string,
    placeholder: string,
    value?: number | string,
    options: IOptions[] | undefined,
    onSelect?: React.ReactEventHandler,
    onBlur?: React.FocusEventHandler,
    error?: string,
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
                onChange={props.onSelect}
                onBlur={props.onBlur}
            >
                <option className={[classes.container_option, classes.placeholder].join(' ')}
                    value=""
                    selected
                    disabled>
                    {props.placeholder}
                </option>
                {props.options ?
                    props.options.map(item =>
                        <option key={item.id} className={classes.container_option}
                            value={item.id}
                            selected={item.id === props.value ? true : false}
                        >
                            {item.name}
                        </option>
                    )
                    : null
                }
            </select>
            <div style={{ color: 'red' }}>
                {props.error && <>{props.error}</>}
            </div>
        </div >
    )
}

export default Select