import React, { FunctionComponent } from 'react'

interface RightArrowProps {
    onClick: React.MouseEventHandler,
    disabled: boolean
}

const RightArrow: FunctionComponent<RightArrowProps> = (props) => {
    return (
        <div className='arrows-gallery right' onClick={props.onClick}>
            <svg className='arrow-gallery right' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g clip-path="url(#clip0_2582_4002)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7367 30L17.4894 30C17.2996 24.3975 14.567 19.4398 10.4094 16.2448L30 16.2448L30 13.7448L10.423 13.7448C14.573 10.5494 17.2998 5.59646 17.4894 3.00106e-06L13.7366 3.32914e-06C13.4183 7.44472 7.4419 13.4234 1.00228e-05 13.7419L-1.42108e-06 13.7448L-1.20252e-06 16.2448L1.0242e-05 16.25L1.21501e-05 16.2581C7.44191 16.5766 13.4183 22.5553 13.7367 30Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_2582_4002">
                        <rect width="30" height="30" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}

export default RightArrow