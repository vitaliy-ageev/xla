import React, { FunctionComponent } from 'react'
import Article from '../components/Article/Article';
import Basement from '../components/Basement/Basement';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import LastThreads from '../components/LastThreads/LastThreads';
import LeftRightSection from '../components/LeftRightSection/LeftRightSection';
import LeftSection from '../components/LeftRightSection/LeftSection';
import RightSection from '../components/LeftRightSection/RightSection';
import MainSection from '../components/MainSection/MainSection';
import OpportunityHiring from '../components/OpportunityHiring/OpportunityHiring';
import Projects from '../components/ProjectsList/ProjectsList';
import StartBlock from '../components/StartBlock/StartBlock';
import Title from '../components/UI/Title/Title';

const Main: FunctionComponent = () => {
    const categorieItems = [
        { id: 1, name: "All projects", count: 24, isActive: true },
        { id: 2, name: "Developed", count: 14, isActive: false },
        { id: 3, name: "Launched", count: 8, isActive: false },
    ]

    const projectItems = [
        {
            id: 1,
            name: "Babka cryptex",
            description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
            likes: "11,299",
            tags: [
                { id: 1, name: "WEB 3", path: "/" },
                { id: 2, name: "Revenue sharing", path: "/" },
                { id: 3, name: "Revenue sharing", path: "/" },
                { id: 4, name: "Crypto", path: "/" }
            ],
            background: "/",
            path: "project"
        },
        {
            id: 2,
            name: "Name project",
            description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
            likes: "11,299",
            tags: [
                { id: 1, name: "WEB 3", path: "/" },
                { id: 2, name: "Revenue sharing", path: "/" },
                { id: 3, name: "Revenue sharing", path: "/" },
                { id: 4, name: "Crypto", path: "/" }
            ],
            background: "/",
            path: "project"
        },
        {
            id: 3,
            name: "Name project",
            description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
            likes: "11,299",
            tags: [
                { id: 1, name: "WEB 3", path: "/" },
                { id: 2, name: "Revenue sharing", path: "/" },
                { id: 3, name: "Revenue sharing", path: "/" },
                { id: 4, name: "Crypto", path: "/" }
            ],
            background: "/",
            path: "project"
        },
        {
            id: 4,
            name: "Name project",
            description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
            likes: "11,299",
            tags: [
                { id: 1, name: "WEB 3", path: "/" },
                { id: 2, name: "Revenue sharing", path: "/" },
                { id: 3, name: "Revenue sharing", path: "/" },
                { id: 4, name: "Crypto", path: "/" }
            ],
            background: "/",
            path: "project"
        },
        {
            id: 5,
            name: "Name project",
            description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
            likes: "11,299",
            tags: [
                { id: 1, name: "WEB 3", path: "/" },
                { id: 2, name: "Revenue sharing", path: "/" },
                { id: 3, name: "Revenue sharing", path: "/" },
                { id: 4, name: "Crypto", path: "/" }
            ],
            background: "/",
            path: "project"
        },
        {
            id: 6,
            name: "Name project",
            description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
            likes: "11,299",
            tags: [
                { id: 1, name: "WEB 3", path: "/" },
                { id: 1, name: "Revenue sharing", path: "/" },
                { id: 3, name: "Revenue sharing", path: "/" },
                { id: 4, name: "Crypto", path: "/" }
            ],
            background: "/",
            path: "project"
        },
        {
            id: 7,
            name: "Name project",
            description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
            likes: "11,299",
            tags: [
                { id: 1, name: "WEB 3", path: "/" },
                { id: 1, name: "Revenue sharing", path: "/" },
                { id: 3, name: "Revenue sharing", path: "/" },
                { id: 4, name: "Crypto", path: "/" }
            ],
            background: "/",
            path: "project"
        },
        {
            id: 8,
            name: "Name project",
            description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
            likes: "11,299",
            tags: [
                { id: 1, name: "WEB 3", path: "/" },
                { id: 2, name: "Revenue sharing", path: "/" },
                { id: 3, name: "Revenue sharing", path: "/" },
                { id: 4, name: "Crypto", path: "/" }
            ],
            background: "/",
            path: "project"
        },
        {
            id: 9,
            name: "Name project",
            description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
            likes: "11,299",
            tags: [
                { id: 1, name: "WEB 3", path: "/" },
                { id: 2, name: "Revenue sharing", path: "/" },
                { id: 3, name: "Revenue sharing", path: "/" },
                { id: 4, name: "Crypto", path: "/" }
            ],
            background: "/",
            path: "project"
        },
    ]

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
            {/* Header */}
            <Header style='white' />
            <StartBlock />
            <MainSection>
                {/* Title */}
                <Title title='BROWSE PROJECTS BASED ON THEIR SPECIALITY AND STATUS' />
                <LeftRightSection>
                    <LeftSection>
                        {/* Projects */}
                        <Projects projectItems={projectItems} categorieItems={categorieItems} />
                    </LeftSection>
                    <RightSection>
                        {/* Article */}
                        <Article />
                        {/* Last Threads */}
                        <LastThreads threadItems={LastThreadsItems} />
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

export default Main;