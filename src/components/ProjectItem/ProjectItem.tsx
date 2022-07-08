import React, { FunctionComponent, useState } from 'react'
import LinearSeparation from '../UI/LinearCornerSeparation/LinearCornerSeparation';
import classes from './ProjectItem.module.scss';
import Opportunities from './Opportunities/Opportunities';
import FAQ from './FAQ/FAQ';
import Header from './Header/Header';
import Buttons from './Buttons/Buttons';
import Description from './Description/Description';
import Title from './Title/Title';
import Gallery from './Gallery/Gallery';
import RecentUpdates from './RecentUpdates/RecentUpdates';
import { IOpportunity } from '../../models/IOpportunity';
import { IFAQ, IProject, IUpdates } from '../../models/IProject';
import UpdatesModal from './UpdatesModal/UpdatesModal';

interface ProjectItemProps {
    project: IProject | undefined,
    faqs: IFAQ[] | undefined,
    updates: IUpdates[] | undefined,
    opportunities: IOpportunity[] | undefined
}

const ProjectItem: FunctionComponent<ProjectItemProps> = (props) => {
    const [isUpdatesModalOpen, setIsUpdatesModalOpen] = useState<boolean>(false);

    const openUpdatesModal = () => {
        setIsUpdatesModalOpen(true)
    }

    const closeUpdatesModal = () => {
        setIsUpdatesModalOpen(false)
    }

    return (
        <>
            {props.project && <div className={classes.project_item}>
                {/* Title & Subtitle & Link */}
                <Header title={props.project.name} subtitle={props.project.title} link={props.project.url} />
                <LinearSeparation />
                {/* Buttons */}
                <div className={classes.project_item_buttons}>
                    <Buttons url={props.project.forum_topic_url} typeform='dsd' name='dd' title='Discuss the project' style='black' ></Buttons>
                    <Buttons typeform={props.project.typeform_question_popup} name={props.project.name} title='Ask a Question' />
                    <Buttons typeform={props.project.typeform_competitor_popup} name={props.project.name} title='Share a similar project' />
                </div>
                {/* Desctiption */}
                <Description desciption={props.project.description} />
                {/* Gallery */}
                {props.project.images_url && <>
                    <Title title='Review' />
                    <Gallery images={props.project.images_url} />
                </>}
                {/* Recent updates */}
                {props.updates?.toString() && <>
                    <Title title='Recent updates' link='Version history' onLinkClick={openUpdatesModal} />
                    <LinearSeparation mobile={true} />
                    <RecentUpdates updates={props.updates} />
                    <UpdatesModal updates={props.updates} isOpen={isUpdatesModalOpen} closeModal={closeUpdatesModal} />
                </>}
                {/* Opportunities */}
                {props.opportunities && <>
                    <Title title='Opportunities' />
                    <LinearSeparation mobile={true} />
                    <Opportunities opportunities={props.opportunities} />
                </>}
                {/* FAQ */}
                {props.faqs?.toString() && <>
                    <Title title='FAQ' />
                    <LinearSeparation mobile={true} />
                    <FAQ faqs={props.faqs} />
                </>}
            </div>}
        </>
    )
}

export default ProjectItem