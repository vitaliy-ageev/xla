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
import { opportunityAPI } from '../services/OpportunityService';
import { projectAPI } from '../services/ProjectService';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

const Project: FunctionComponent = () => {
    window.scrollTo(0, 0);
    const LastThreadsItems = [
        {
            id: 1,
            title: "Share your ideas and get rewarded with NFTs",
            mobile_title: "Be creative and get rewarded!",
            isTrending: true,
            comments: 50,
            tags: [
                { id: 1, name: "web3" },
                { id: 2, name: "NFTs" },
                { id: 3, name: "contest" },
            ],
            link: "https://test.x.la/forum/viewtopic.php?t=137"
        },
        {
            id: 2,
            title: "From Web2 to Web3: Is the future closer than we think?",
            mobile_title: "Moving from Web2 to Web3",
            isTrending: false,
            comments: 50,
            tags: [
                { id: 1, name: "web3" },
                { id: 2, name: "future" },
                { id: 3, name: "blockchain" },
            ],
            link: "https://test.x.la/forum/viewtopic.php?t=78"
        },
        {
            id: 3,
            title: "Earn crypto while learning about crypto",
            mobile_title: "Earn crypto while learning",
            isTrending: false,
            comments: 50,
            tags: [
                { id: 1, name: "L2E" },
                { id: 2, name: "crypto" },
                { id: 3, name: "blockchain" },
            ],
            link: "https://test.x.la/forum/viewtopic.php?t=84"
        },
    ]
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
                        <LastThreads threadItems={LastThreadsItems} style='project_page' />
                        {/* Opportunity */}
                        <OpportunityHiring opportunities={opportunities?.opportunities} />
                    </RightSection>
                </LeftRightSection>
            </MainSection>
            <Footer />
            <Breadcrumbs location='Home' path='/' />
            <Basement />
        </div>
    )
}

export default Project;