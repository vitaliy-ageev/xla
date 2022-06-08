import React, { FunctionComponent } from 'react'
import classes from './Header.module.scss'
import { Link } from 'react-router-dom';
import { RouteNames } from '../../../routes/routes';

interface HeaderProps {
    title: string | null,
    subtitle: string | null,
    link: string | null
}

const Header: FunctionComponent<HeaderProps> = (props) => {
    return (
        <div className={classes.header}>
            {/* Title */}
            {props.title && <h1 className={classes.header_title}>
                {props.title}
            </h1>}
            {/* Subtitle */}
            {props.subtitle && <h2 className={classes.header_subtitle}>
                {props.subtitle}
            </h2>}
            {/* Link */}
            {props.link && <Link to={RouteNames.MAIN} className={classes.header_link}>
                {props.link}
            </Link>}
        </div>
    )
}

export default Header