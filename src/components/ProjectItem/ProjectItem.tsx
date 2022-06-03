import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom';
import CustomButton from '../UI/CustomButton/CustomButton';
import LinearSeparation from '../UI/LinearCornerSeparation/LinearCornerSeparation';
import classes from './ProjectItem.module.scss';
import OpportunitiesItem from './OpportunitiesItem/OpportunitiesItem';
import FAQ from '../FAQ/FAQ';
import { useParams } from 'react-router-dom';
import { projectAPI } from '../../services/ProjectService';
import ImageGallery from 'react-image-gallery';
import LeftNav from 'react-image-gallery';
import LeftArrow from '../UI/Icons/Arrows/LeftArrow';
import RightArrow from '../UI/Icons/Arrows/RightArrow';

const ProjectItem: FunctionComponent = () => {
    const OpportunitiesArr = [
        {
            id: 1,
            name: "For Writers",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/",
            link: "/"
        },
        {
            id: 2,
            name: "For Agents",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/",
            link: "/"
        },
        {
            id: 3,
            name: "For Curators",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/",
            link: "/"
        },
        {
            id: 4,
            name: "For Readers",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/",
            link: "/"
        },
        {
            id: 5,
            name: "For Operators",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/",
            link: "/"
        },
        {
            id: 6,
            name: "For Web 3 Developers",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/",
            link: "/"
        },
        {
            id: 7,
            name: "For UX/UI Designers",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/",
            link: "/"
        },
        {
            id: 8,
            name: "For Artists",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/",
            link: "/"
        },
        {
            id: 9,
            name: "For Product managers",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/",
            link: "/"
        },
    ]

    const { id } = useParams();
    const { data: project } = projectAPI.useFetchOneProjectQuery(`${id}`)
    const { data: faqs } = projectAPI.useFetchProjectFAQQuery(`${id}`)
    const { data: updates } = projectAPI.useFetchProjectUpdatesQuery(`${id}`)


    return (
        <>
            {project && <div className={classes.project_item}>
                {/* Title */}
                <h1 className={classes.project_item_title}>
                    {project.name}
                </h1>
                {/* Subtitle */}
                <h2 className={classes.project_item_subtitle}>
                    {project.title}
                </h2>
                {/* Link */}
                <Link to="/" className={classes.project_item_link}>
                    {project.url}
                </Link>
                <LinearSeparation />
                {/* Buttons */}
                <div className={classes.project_item_buttons}>
                    <CustomButton name='Project discussion' styleBtn='background' marginR={20} width={352} color='black' style='project_page' />
                    <CustomButton name='Ask a Question' styleBtn='border' marginR={20} width={310} color='black' style='project_page' />
                    <CustomButton name='Share a similar project' styleBtn='border' marginR={20} width={420} color='black' style='project_page' />
                </div>
                {/* Desctiption */}
                <div className={classes.project_item_description}>
                    {project.description}
                </div>

                {/* Title */}
                <div className={classes.project_item_desc_title_block}>
                    <h3 className={classes.project_item_desc_title}>
                        Review
                    </h3>
                </div>

                {/* Background */}
                <div className={classes.project_item_galery}
                // style={{ background: `url(${project.images_url.toString().split(',')[0]}` }}
                >
                    <ImageGallery items={project.images_url.map(img => ({ original: img, thumbnail: img }))}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showThumbnails={false}
                        autoPlay={true}
                        renderLeftNav={(onClick, disabled) => <LeftArrow onClick={onClick} disabled={disabled} />}
                        renderRightNav={(onClick, disabled) => <RightArrow onClick={onClick} disabled={disabled} />}
                    />
                </div>

                {/* Recent updates */}
                {updates?.toString() && <>
                    <div className={classes.project_item_desc_title_block}>
                        {/* Title */}
                        <h3 className={classes.project_item_desc_title}>
                            Recent updates
                        </h3>
                        <h4 className={classes.project_item_desc_title_link}>
                            Version history
                        </h4>
                    </div>
                    <LinearSeparation mobile={true} />

                    {/* Recent updates block */}
                    <div className={classes.project_item_recent_updates}>
                        {/* Title */}
                        <div className={classes.project_item_recent_updates_title_block}>
                            <h3 className={classes.project_item_recent_updates_title}>
                                {updates.slice(0, 1)[0].version}
                            </h3>
                            <span className={classes.project_item_recent_updates_data}>
                                {updates.slice(0, 1)[0].created_at}
                            </span>
                        </div>
                        {/* Text */}
                        <div className={classes.project_item_recent_updates_text}>
                            <p>
                                {updates.slice(0, 1)[0].description}
                            </p>
                        </div>
                    </div>
                </>}

                {/* Opportunities */}
                {<>
                    <div className={classes.project_item_desc_title_block}>
                        {/* Title */}
                        <h3 className={classes.project_item_desc_title}>
                            Opportunities
                        </h3>
                    </div>
                    <LinearSeparation mobile={true} />

                    {/*  */}
                    <OpportunitiesItem OpportunitiesArr={OpportunitiesArr} />
                </>}

                {/* FAQ */}
                {faqs?.toString() && <>
                    <div className={classes.project_item_desc_title_block}>
                        {/* Title */}
                        <h3 className={classes.project_item_desc_title}>
                            FAQ
                        </h3>
                    </div>
                    <LinearSeparation mobile={true} />
                    <FAQ faqs={faqs} />
                </>}

            </div>}
        </>
    )
}

export default ProjectItem