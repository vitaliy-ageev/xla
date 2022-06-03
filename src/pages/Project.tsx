import React, { FunctionComponent } from 'react'
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

const Project: FunctionComponent = () => {
    window.scrollTo(0, 0);
    const LastThreadsItems = [
        {
            id: 1,
            title: "Share your ideas and get rewarded with NFTs!",
            isTrending: true,
            comments: 50,
            tags: [
                { id: 1, name: "web3" },
                { id: 2, name: "NFTs" },
                { id: 3, name: "contest" },
            ],
            link: "https://test.x.la/forum/viewforum.php?f=80"
        },
        {
            id: 2,
            title: "What are your thoughts on the future of Web3?",
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
    
    return (
        <div className='App'>
            <Header style='black' />
            <MainSection style='project_page' >
                <LeftRightSection>
                    <LeftSection>
                        {/* Project */}
                        <ProjectItem />
                    </LeftSection>
                    <RightSection>
                        {/* Last Threads */}
                        <LastThreads threadItems={LastThreadsItems} style='project_page' />
                        {/* Opportunity */}
                        <OpportunityHiring />
                    </RightSection>
                </LeftRightSection>
            </MainSection>
            <Footer />
            <Basement />
        </div>
    )
}

export default Project;