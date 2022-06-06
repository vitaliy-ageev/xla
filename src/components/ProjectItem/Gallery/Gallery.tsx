import React, { FunctionComponent } from 'react'
import classes from './Gallery.module.scss'
import ImageGallery from 'react-image-gallery';
import LeftArrow from '../../UI/Icons/Arrows/LeftArrow';
import RightArrow from '../../UI/Icons/Arrows/RightArrow';

interface GalleryProps {
    images: []
}

const Gallery: FunctionComponent<GalleryProps> = (props) => {
    return (
        <div className={classes.gallery}>
            <ImageGallery items={props.images.map(img => ({ original: img, thumbnail: img }))}
                showFullscreenButton={false}
                showPlayButton={false}
                showThumbnails={false}
                autoPlay={true}
                renderLeftNav={(onClick, disabled) => <LeftArrow onClick={onClick} disabled={disabled} />}
                renderRightNav={(onClick, disabled) => <RightArrow onClick={onClick} disabled={disabled} />}
            />
        </div>
    )
}

export default Gallery