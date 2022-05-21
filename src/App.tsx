import React, { FunctionComponent } from 'react'
import AppRouter from './components/AppRouter/AppRouter';
import './styles/base.scss'
import './styles/fonts.scss'

const App: FunctionComponent = () => {
    return (
        <div>
            <AppRouter />
        </div>
    )
}

export default App;