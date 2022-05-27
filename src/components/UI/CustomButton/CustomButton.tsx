import React, { FunctionComponent } from 'react'
import classes from './CustomButton.module.scss'

interface ICustomButton {
    name?: string,
    styleBtn?: string,
    paddingUD?: number,
    paddingLR?: number | string,
    fontSize?: number,
    marginR?: number,
    marginL?: number,
    width?: number,
    color?: string,
    style?: string
}

const CustomButton: FunctionComponent<ICustomButton> = ({ name, styleBtn = 'none', paddingLR = 'auto', marginR, marginL, width, color, style }) => {
    // Перевести логику на редакс??
    let rootClass = [classes.custom_button];

    if (styleBtn && styleBtn == 'background') {
        rootClass.push(classes.background);
    } else if (styleBtn && styleBtn == 'border') {
        rootClass.push(classes.border);
    } else if (styleBtn && styleBtn == 'none') {
        rootClass.push(classes.none);
    } else {
        rootClass.push(classes.none);
    }

    if (color == 'black') {
        rootClass.push(classes.black);
    } else {
        rootClass.push(classes.white);
    }

    if (style == 'project_page') {
        rootClass.push(classes.project_page);
    }

    return (
        <div className={rootClass.join(' ')} style={{
            marginRight: `${marginR}px`,
            marginLeft: `${marginL}px`,
            width: `${width}px`
        }} >
            {name}
        </div >
    )
}

export default CustomButton