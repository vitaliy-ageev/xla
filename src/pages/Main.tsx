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
import { useAppDispatch } from '../hooks/hooks';
import { opportunityAPI } from '../services/opportunityService';
import { generalSlice } from '../store/reducers/generalSlice/generalSlice';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import { useFetchAdminProfileQuery } from '../services/userAdminService';

const Main: FunctionComponent = (props) => {
    window.scrollTo(0, 0);

    const { data: opportunities } = opportunityAPI.useFetchAllOpportunitiesQuery({ limit: 51, offset: 0 })
    const scrollRef: any = useRef()
    const { setScroll } = generalSlice.actions;
    const dispatch = useAppDispatch();

    const { data: adminProfile } = useFetchAdminProfileQuery()

    console.log("ddd", adminProfile)

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
                            <LastThreads />
                            {/* Opportunity */}
                            {/* <OpportunityHiring opportunities={opportunities?.opportunities} /> */}
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