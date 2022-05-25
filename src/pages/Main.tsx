import React, { FunctionComponent } from 'react'
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
            {/* Main */}
            <NoiseEffect >
                <MainSection />
            </NoiseEffect >
            {/* Footer */}
        </div>
    )
}

export default Main;