import { file } from '@babel/types'
import React, { FunctionComponent, useEffect, useState } from 'react'
import FileIcon from '../../Icons/File/FileIcon'
import Image from '../../Icons/Image/Image'
import Trash from '../../Icons/Trash/Trash'
import classes from './File.module.scss'

interface IFile {
    id: number,
    name: string,
    size: string,
    type: string,
}

interface FileProps {
    name: string,
    placeholder?: string,
    onChange?: React.ChangeEventHandler
    file?: IFile[] | undefined,
    multiple?: boolean
}

const File: FunctionComponent<FileProps> = (props) => {
    const [arr, setArr] = useState<IFile[]>([])

    useEffect(() => {
        setArr(props.file as [])
    }, [props.file])

    console.log('555,', arr)

    const resetHandle = (e: any) => {
        setArr(arr.filter(p => p.id !== e.id))
    }
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
                className={classes.container_input}
                multiple={props.multiple ? props.multiple : false} />
            {/* Images */}
            <div className={classes.container_files}>
                {arr.map(fl =>
                    <div key={fl.id} className={classes.container_files_item}>
                        <Image />
                        <div className={classes.container_files_item_block}>
                            <div className={classes.container_files_item_block_name}>
                                {fl.name}
                            </div>
                            <div className={classes.container_files_item_block_size}>
                                {Math.ceil(Number(fl.size) / 1000) + ' KB'}
                            </div>
                        </div>
                        <div className={classes.container_files_item_trash}
                            onClick={() => resetHandle(fl)}>
                            <Trash />
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default File