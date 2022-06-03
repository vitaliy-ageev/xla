import React, { FunctionComponent } from 'react'
import classes from './Logotype.module.scss'

interface ILogotype {
    color?: string,
    style?: string,
    onClick?: React.MouseEventHandler
}

const Logotype: FunctionComponent<ILogotype> = ({ color = 'white', style, onClick }) => {
    let rootClasses = [classes.logotype];
    if (style == 'footer') {
        rootClasses.push(classes.footer)
    }

    return (
        <div onClick={onClick} className={rootClasses.join(' ')}>
            {/* Svg Icon */}
            <svg className={classes.logotype_icon} xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 0H59.9495L69.7087 9.8V70H9.75922L0 60.2V0Z" fill={color} />
                <g clipPath="url(#clip0_1715_34118)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M46.143 19.6H55.767L23.5657 50.4H13.9417L46.143 19.6ZM23.5609 19.6H13.9417L20.6012 25.9724H30.2204L23.5609 19.6ZM46.1269 50.4H55.7461L49.0867 44.0276H39.4675L46.1269 50.4Z" fill={color == 'white' ? 'black' : 'white'} />
                </g>
                <defs>
                    <clipPath id="clip0_1715_34118">
                        <rect width="41.8252" height="30.8" fill={color} transform="translate(13.9417 19.6)" />
                    </clipPath>
                </defs>
            </svg>
            {/* Svg Name */}
            <svg className={classes.logotype_name} xmlns="http://www.w3.org/2000/svg" width="256" height="34" viewBox="0 0 256 34" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1845 32.0591H19.4382L27.8483 0.199951H36.9522V33.3272H32.4017V4.61572L33.1433 1.46805H31.9372L23.3425 33.3272H14.2832L5.78087 1.46805H4.52711L5.3163 4.61572V33.3272H0.762848V0.199951H9.86975L18.1845 32.0591ZM64.9221 33.3272H44.0161V0.199951H64.9221V4.19402H48.5666V14.7666H62.5992V18.7124H48.5666V29.3332H64.9221V33.3272ZM97.3027 4.19402V0.199951H70.3096V4.19402H81.5547V33.3272H86.1052V4.19402H97.3027ZM95.9086 33.3272L106.222 0.199951H115.606L125.924 33.3272H121.371L117.538 20.8751H104.313L100.462 33.3272H95.9086ZM110.311 1.46805L105.546 16.8811H116.305L111.564 1.46805H110.311ZM150.032 32.0591H148.778L140.461 0.199951H131.357V33.3272H135.907V4.61572L135.118 1.46805H136.372L144.874 33.3272H153.933L162.528 1.46805H163.737L162.993 4.61572V33.3272H167.546V0.199951H158.439L150.032 32.0591ZM172.889 33.3272L183.202 0.199951H192.586L202.905 33.3272H198.351L194.519 20.8751H181.293L177.442 33.3272H172.889ZM187.291 1.46805L182.526 16.8811H193.286L188.545 1.46805H187.291ZM212.89 0.199951H208.337V30.7428C208.337 31.7127 208.599 32.4748 209.126 33.023C209.653 33.5712 210.394 33.8303 211.356 33.7971L229.243 33.3272V29.3332L212.89 29.8031V0.199951ZM239.648 0.199951V29.8031L256 29.3332V33.3272L238.114 33.7971C237.152 33.8303 236.41 33.5712 235.883 33.023C235.356 32.4748 235.094 31.7127 235.094 30.7428V0.199951H239.648Z" fill={color} />
            </svg>
        </div>
    )
}

export default Logotype