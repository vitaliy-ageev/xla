import React, { FunctionComponent } from 'react'
import StartBlock from '../components/StartBlock/StartBlock';
import Header from '../components/Header/Header';

const Main: FunctionComponent = () => {
    return (
        <div className='App'>
            <Header />
            <StartBlock />
        </div>
    )
}

export default Main;