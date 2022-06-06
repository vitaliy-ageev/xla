import React, { FunctionComponent, useEffect, useState } from 'react'
import Basement from '../components/Basement/Basement'
import FilterOpportunities from '../components/FilterOpportunities/FilterOpportunities'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import LeftRightSection from '../components/LeftRightSection/LeftRightSection'
import LeftSection from '../components/LeftRightSection/LeftSection'
import RightSection from '../components/LeftRightSection/RightSection'
import MainSection from '../components/MainSection/MainSection'
import OpportunitiesList from '../components/OpportunitiesList/OpportunitiesList'
import TitleSection from '../components/TitleSection/TitleSection'
import Title from '../components/UI/Title/Title'
import { Embed } from '../utils/embed'

const Opportunities: FunctionComponent = () => {
    window.scrollTo(0, 0);

    return (
        <div className='App'>
            <Header style='white' />
            <TitleSection />
            <MainSection>
                {/* Title */}
                <Title title='Latest New Projects' />
                <LeftRightSection>
                    <LeftSection className='opportunities'>
                        <OpportunitiesList />
                    </LeftSection>
                    <RightSection className='opportunities'>
                        <FilterOpportunities  />
                    </RightSection>
                </LeftRightSection>
            </MainSection>
            <Footer />
            <Basement />
        </div>
    )
}

export default Opportunities