import React, { createRef, FunctionComponent, useEffect, useRef, useState } from 'react'
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
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { opportunityAPI } from '../services/OpportunityService';
import { generalSlice } from '../store/reducers/generalSlice/generalSlice';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

const Main: FunctionComponent = (props) => {
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

    const { data: opportunities } = opportunityAPI.useFetchAllOpportunitiesQuery({ limit: 51, offset: 0 })
    const scrollRef: any = useRef()
    const { setScroll } = generalSlice.actions;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setScroll(scrollRef.current.offsetTop))
    }, [])

    return (
        <div className='App'>
            {/* Header */}
            <Header style='white' />
            <StartBlock />
            <div ref={scrollRef}>
                <MainSection style='main_page'>
                    {/* Title */}
                    <Title title='BROWSE PROJECTS BASED ON THEIR SPECIALITY AND STATUS' />
                    <LeftRightSection>
                        <LeftSection className='main_page'>
                            {/* Projects */}
                            <Projects />
                        </LeftSection>
                        <RightSection className='main_page'>
                            {/* Article */}
                            <Article />
                            {/* Last Threads */}
                            <LastThreads threadItems={LastThreadsItems} />
                            {/* Opportunity */}
                            <OpportunityHiring opportunities={opportunities?.opportunities} />
                        </RightSection>
                    </LeftRightSection>
                </MainSection>
            </div>
            <Footer />
            <Breadcrumbs location='Home' path='Main/' />
            <Basement />

        </div>
    )
}

export default Main;