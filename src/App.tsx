import React, { FunctionComponent } from 'react'
import AppRouter from './components/AppRouter/AppRouter';
import './assets/styles/base.scss';

const App: FunctionComponent = () => {
    return (
        <div>
            <AppRouter />
        </div>
    )
}

export default App;