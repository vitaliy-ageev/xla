import React, { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom';
import Basement from '../components/Basement/Basement';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import LastThreads from '../components/LastThreads/LastThreads';
import LeftRightSection from '../components/LeftRightSection/LeftRightSection';
import LeftSection from '../components/LeftRightSection/LeftSection';
import RightSection from '../components/LeftRightSection/RightSection';
import MainSection from '../components/MainSection/MainSection';
import OpportunityHiring from '../components/OpportunityHiring/OpportunityHiring';
import ProjectItem from '../components/ProjectItem/ProjectItem';
import { opportunityAPI } from '../services/opportunityService';
import { projectAPI } from '../services/projectService';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

const Project: FunctionComponent = () => {
    window.scrollTo(0, 0);

    const { id } = useParams();
    const { data: project } = projectAPI.useFetchOneProjectQuery(`${id}`)
    const { data: faqs } = projectAPI.useFetchProjectFAQQuery(`${id}`)
    const { data: updates } = projectAPI.useFetchProjectUpdatesQuery(`${id}`)
    const { data: opportunities } = opportunityAPI.useFetchAllProjectOpportunitiesQuery(`${id}`)

    return (
        <div className='App'>
            <Header style='black' />
            <MainSection style='project_page' >
                <LeftRightSection>
                    <LeftSection>
                        {/* Project */}
                        <ProjectItem project={project} updates={updates} faqs={faqs} opportunities={opportunities?.opportunities} />
                    </LeftSection>
                    <RightSection>
                        {/* Last Threads */}
                        <LastThreads style='project_page' />
                        {/* Opportunity */}
                        {/* <OpportunityHiring project_id={project?.id} opportunities={opportunities?.opportunities} /> */}
                    </RightSection>
                </LeftRightSection>
            </MainSection>
            <Footer />
            <Breadcrumbs location='Home' path='/metamall' />
            <Basement />
        </div>
    )
}

export default Project;