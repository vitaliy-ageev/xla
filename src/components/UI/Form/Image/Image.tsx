import React, { FunctionComponent, useEffect, useState } from 'react'
import { ResponceImagesUpload } from '../../../../models/IProject'
import FileIcon from '../../Icons/File/FileIcon'
import ImageIcon from '../../Icons/Image/ImageIcon'
import Trash from '../../Icons/Trash/Trash'
import classes from './Image.module.scss'

interface ImageProps {
    name: string,
    placeholder?: string,
    onChange?: React.ChangeEventHandler
    image?: ResponceImagesUpload[] | undefined,
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
                onChange={props.onChange}
                className={classes.container_input}
                multiple={props.multiple ? props.multiple : false}
                accept={props.accept} />
            <div style={{ color: 'red' }}>
                {props.error && <>{props.error}</>}
            </div>
            {/* Images */}
            <div className={classes.container_files}>
                {props?.image ?
                    props?.image.map((img: ResponceImagesUpload) =>
                        <div key={img.fileUpload?.file_name}
                            className={img.isUpload === true ? [classes.container_files_item, classes.upload].join(' ')
                                : img.isUpload === false ? [classes.container_files_item, classes.no_upload].join(' ')
                                    : [classes.container_files_item].join(' ')}>
                            <ImageIcon color={img.isUpload === true ? 'green' : img.isUpload === false ? 'red' : 'grey'} />
                            <div className={classes.container_files_item_block}>
                                <div className={classes.container_files_item_block_name}>
                                    {img.fileUpload?.file_name}
                                </div>
                                <div className={classes.container_files_item_block_size}>
                                    {Math.ceil(Number(img.fileUpload?.file_size) / 1000) + ' KB '}
                                    {img.isUpload === false ? <span>Upload failed. Please try again.</span> : ''}
                                </div>
                            </div>
                            <div className={classes.container_files_item_trash}
                                onClick={() => props?.resetHandler(img)}>
                                <Trash />
                            </div>
                        </div>
                    )
                    : <></>
                }

            </div>
        </div>
    )
}

export default Image