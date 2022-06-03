import React, { FunctionComponent, useEffect } from 'react'
import Basement from '../components/Basement/Basement';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import LeftRightSection from '../components/LeftRightSection/LeftRightSection';
import LeftSection from '../components/LeftRightSection/LeftSection';
import RightSection from '../components/LeftRightSection/RightSection';
import MainSection from '../components/MainSection/MainSection';
import OpportunitiItem from '../components/OpportunitiItem/OpportunitiItem';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { Embed } from '../utils/embed';

const Opportuniti: FunctionComponent = () => {
  window.scrollTo(0, 0);

  useEffect(() => {
    Embed()
  }, [])

  return (
    <div className='App'>
      {/* Header */}
      <Header style='black' />
      {/* Main */}
      <MainSection style='opportuniti_page' >
        <LeftRightSection>
          <LeftSection>
            {/* Opportuniti Item */}
            <OpportunitiItem />
          </LeftSection>
          <RightSection>
            {/* Project card */}
            <ProjectCard />
          </RightSection>
        </LeftRightSection>
      </MainSection>
      {/* Footer */}
      <Footer />
      <Basement />
    </div>
  )
}

export default Opportuniti