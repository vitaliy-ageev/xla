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
            title: "Make Any Web PAge 3-D With 3-D It!",
            isTrending: true,
            comments: 50,
            tags: [
                { id: 1, name: "tags" },
                { id: 2, name: "tags" },
                { id: 3, name: "tags" },
            ],
            link: "/"
        },
        {
            id: 2,
            title: "What is Web3? The future of the internet, cryptocurrency, and estate planning",
            isTrending: false,
            comments: 50,
            tags: [
                { id: 1, name: "tags" },
                { id: 2, name: "tags" },
                { id: 3, name: "tags" },
            ],
            link: "/"
        },
        {
            id: 3,
            title: "iFive: Chinese Web Spying, Twitter on Sale at $10 Billion?, iPad 3 Rumors, Nokia-Microsoft Phones, Designer Dolls-Up \"Square\"",
            isTrending: false,
            comments: 50,
            tags: [
                { id: 1, name: "tags" },
                { id: 2, name: "tags" },
                { id: 3, name: "tags" },
            ],
            link: "/"
        },
    ]

    const OppurtunityItems = [
        {
            id: 1,
            name: "Visual designer (Metaverse)",
            background: "/",
            link: "/",
            tags: [
                { id: 1, name: "Babka Cryptex" },
                { id: 2, name: "Remoute frendly" },

            ]
        },
        {
            id: 2,
            name: "Mobile Developer (iOS)",
            background: "/",
            link: "/",
            tags: [
                { id: 1, name: "Babka Cryptex" },
                { id: 2, name: "Remoute frendly" },
            ]
        },
        {
            id: 3,
            name: "Visual designer (Metaverse)",
            background: "/",
            link: "/",
            tags: [
                { id: 1, name: "Babka Cryptex" },
                { id: 2, name: "Remoute frendly" },

            ]
        },
        // {
        //     id: 4,
        //     name: "Mobile Developer (iOS)",
        //     background: "/",
        //     link: "/",
        //     tags: [
        //         { id: 1, name: "Babka Cryptex" },
        //         { id: 2, name: "Remoute frendly" },
        //     ]
        // },
        // {
        //     id: 5,
        //     name: "Visual designer (Metaverse)",
        //     background: "/",
        //     link: "/",
        //     tags: [
        //         { id: 1, name: "Babka Cryptex" },
        //         { id: 2, name: "Remoute frendly" },

        //     ]
        // },
        // {
        //     id: 6,
        //     name: "Mobile Developer (iOS)",
        //     background: "/",
        //     link: "/",
        //     tags: [
        //         { id: 1, name: "Babka Cryptex" },
        //         { id: 2, name: "Remoute frendly" },
        //     ]
        // },
        // {
        //     id: 7,
        //     name: "Visual designer (Metaverse)",
        //     background: "/",
        //     link: "/",
        //     tags: [
        //         { id: 1, name: "Babka Cryptex" },
        //         { id: 2, name: "Remoute frendly" },

        //     ]
        // },
        // {
        //     id: 8,
        //     name: "Mobile Developer (iOS)",
        //     background: "/",
        //     link: "/",
        //     tags: [
        //         { id: 1, name: "Babka Cryptex" },
        //         { id: 2, name: "Remoute frendly" },
        //     ]
        // },
        // {
        //     id: 9,
        //     name: "Visual designer (Metaverse)",
        //     background: "/",
        //     link: "/",
        //     tags: [
        //         { id: 1, name: "Babka Cryptex" },
        //         { id: 2, name: "Remoute frendly" },

        //     ]
        // },
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
                        <OpportunityHiring opportunityItems={OppurtunityItems} />
                    </RightSection>
                </LeftRightSection>
                <Footer />
            </MainSection>
            <Basement />
        </div>
    )
}

export default Project;