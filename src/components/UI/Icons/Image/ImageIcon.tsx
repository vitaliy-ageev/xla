import React, { FunctionComponent } from 'react'
import classes from './ImageIcon.module.scss'

interface ImageIconProps {
    color?: string
}

const ImageIcon: FunctionComponent<ImageIconProps> = (props) => {
    let rootClasses = [classes.image_icon]
    if (props.color === 'green') {
        rootClasses.push(classes.green)
    } else if (props.color === 'red') {
        rootClasses.push(classes.red)
    } else {
        rootClasses.push(classes.grey)
    }

    return (
        <svg className={rootClasses.join(' ')} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2.14992 15.8414L2.13325 15.8581C1.90825 15.3664 1.76659 14.8081 1.70825 14.1914C1.76659 14.7997 1.92492 15.3497 2.14992 15.8414Z" fillOpacity="0.95" />
            <path d="M7.49993 8.65026C8.5953 8.65026 9.48327 7.76229 9.48327 6.66693C9.48327 5.57156 8.5953 4.68359 7.49993 4.68359C6.40457 4.68359 5.5166 5.57156 5.5166 6.66693C5.5166 7.76229 6.40457 8.65026 7.49993 8.65026Z" fillOpacity="0.95" />
            <path d="M13.4917 1.66699H6.50841C3.47508 1.66699 1.66675 3.47533 1.66675 6.50866V13.492C1.66675 14.4003 1.82508 15.192 2.13341 15.8587C2.85008 17.442 4.38341 18.3337 6.50841 18.3337H13.4917C16.5251 18.3337 18.3334 16.5253 18.3334 13.492V11.5837V6.50866C18.3334 3.47533 16.5251 1.66699 13.4917 1.66699ZM16.9751 10.417C16.3251 9.85866 15.2751 9.85866 14.6251 10.417L11.1584 13.392C10.5084 13.9503 9.45842 13.9503 8.80841 13.392L8.52508 13.1587C7.93341 12.642 6.99175 12.592 6.32508 13.042L3.20841 15.1337C3.02508 14.667 2.91675 14.1253 2.91675 13.492V6.50866C2.91675 4.15866 4.15841 2.91699 6.50841 2.91699H13.4917C15.8417 2.91699 17.0834 4.15866 17.0834 6.50866V10.5087L16.9751 10.417Z" fillOpacity="0.95" />
        </svg>
    )
}

export default ImageIcon