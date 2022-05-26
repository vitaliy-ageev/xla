import React, { FunctionComponent } from 'react'
import Basement from '../components/Basement/Basement';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import MainSection from '../components/MainSection/MainSection';
import StartBlock from '../components/StartBlock/StartBlock';
import NoiseEffect from '../components/UI/NoiseEffect/NoiseEffect';

const Main: FunctionComponent = () => {
    return (
        <div className='App'>
            {/* Header */}
            <Header />
            <StartBlock />
            <MainSection />
            {/* <Footer /> */}
            <Basement />
        </div>
    )
}

export default Main;