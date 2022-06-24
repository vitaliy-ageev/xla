import React, { FunctionComponent } from 'react'
import FileIcon from '../../Icons/File/FileIcon'
import classes from './File.module.scss'

interface FileProps {
    name: string,
    placeholder?: string,
    onChange?: React.ChangeEventHandler
}

const File: FunctionComponent<FileProps> = (props) => {
    return (
        <div className={classes.container}>
            {/* Label */}
            <label htmlFor={props.name}
                className={classes.container_label}>
                <FileIcon />
                <span className={classes.container_label_text}>
                    {props.placeholder}
                </span>
            </label>
            {/* Input */}
            <input type="file"
                name={props.name}
                id={props.name}
                // placeholder={props.placeholder}
                onChange={props.onChange}
                className={classes.container_input} />
        </div>
    )
}

export default File