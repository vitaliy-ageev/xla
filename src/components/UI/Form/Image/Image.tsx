import { file } from '@babel/types'
import React, { FunctionComponent, useEffect, useState } from 'react'
import FileIcon from '../../Icons/File/FileIcon'
import ImageIcon from '../../Icons/Image/ImageIcon'
import Trash from '../../Icons/Trash/Trash'
import classes from './Image.module.scss'

interface IImage {
    id: number,
    name: string,
    size: string,
    type: string,
}

interface ImageProps {
    name: string,
    placeholder?: string,
    onChange?: React.ChangeEventHandler
    image?: IImage[] | undefined,
    accept?: string,
    multiple?: boolean,
    resetHandler: Function,
    onBlur?: React.ReactEventHandler,
    error?: string,
}

const Image: FunctionComponent<ImageProps> = (props) => {
    return (
        <div className={classes.container}>
            {/* Label */}
            <label htmlFor={props.name}
                className={classes.container_label}
                onClick={props.onBlur}>
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
                className={classes.container_input}
                multiple={props.multiple ? props.multiple : false}
                accept={props.accept} />
            <div style={{ color: 'red' }}>
                {props.error && <>{props.error}</>}
            </div>
            {/* Images */}
            {/* <div className={classes.container_files}>
                {props?.image && props?.image.map(fl =>
                    <div key={fl.id} className={classes.container_files_item}>
                        <ImageIcon />
                        <div className={classes.container_files_item_block}>
                            <div className={classes.container_files_item_block_name}>
                                {fl.name}
                            </div>
                            <div className={classes.container_files_item_block_size}>
                                {Math.ceil(Number(fl.size) / 1000) + ' KB'}
                            </div>
                        </div>
                        <div className={classes.container_files_item_trash}
                            onClick={() => props?.resetHandler(fl)}>
                            <Trash />
                        </div>
                    </div>
                )}

            </div> */}
        </div>
    )
}

export default Image