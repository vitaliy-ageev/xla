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
import { opportunityAPI } from '../../services/OpportunityService';

const ProjectItem: FunctionComponent = () => {
    const { id } = useParams();
    const { data: project } = projectAPI.useFetchOneProjectQuery(`${id}`)
    const { data: faqs } = projectAPI.useFetchProjectFAQQuery(`${id}`)
    const { data: updates } = projectAPI.useFetchProjectUpdatesQuery(`${id}`)
    const { data: opportunities } = opportunityAPI.useFetchAllProjectOpportunitiesQuery(`${id}`)

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
                    {/* <CustomButton name='Project discussion' styleBtn='background' marginR={20} width={352} color='black' style='project_page' /> */}
                    <CustomButton styleBtn='border' marginR={20} color='black' style='project_page'>
                        <button
                            data-tf-slider={project.typeform_popup ? project.typeform_popup.toString().split('"')[0] : 'VHpdDtau'}
                            data-tf-width="550"
                            data-tf-iframe-props={`title=${project.name}`}
                            data-tf-medium="snippet"
                            data-tf-hidden="hidden1=xxxxx"
                        >Ask a Question</button>
                    </CustomButton>
                    {/* <CustomButton name='Share a similar project' styleBtn='border' marginR={20} width={420} color='black' style='project_page' /> */}
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
                {opportunities?.opportunities && <>
                    <div className={classes.project_item_desc_title_block}>
                        {/* Title */}
                        <h3 className={classes.project_item_desc_title}>
                            Opportunities
                        </h3>
                    </div>
                    <LinearSeparation mobile={true} />
                    {/*  */}
                    <OpportunitiesItem opportunities={opportunities} />
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