import React, { FunctionComponent, ReactElement } from 'react'
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
    style?: string,
    children?: ReactElement | ReactElement[]
}

const CustomButton: FunctionComponent<ICustomButton> = ({ children, name, styleBtn = 'none', paddingLR = 'auto', marginR, marginL, width, color, style }) => {
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
    } else if (style == 'project_card') {
        rootClass.push(classes.project_card)
    }

    return (
        <div className={rootClass.join(' ')} style={{
            marginRight: `${marginR}px`,
            marginLeft: `${marginL}px`,
            width: `${width}px`
        }} >
            {name}
            {children}
        </div >
    )
}

export default CustomButton