import React, { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import Basement from '../components/Basement/Basement'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import MainSection from '../components/MainSection/MainSection'
import BlockWithShadow from '../components/UI/BlockWithShadow/BlockWithShadow'
import CenteredWindow from '../components/UI/CenteredWindow/CenteredWindow'
import CloseWindow from '../components/UI/Icons/CloseWindow/CloseWindow'

const CreateProject: FunctionComponent = (props) => {
    const history = useNavigate();

    console.log("HISTORY", history)

    return (
        <div className='App'>
            <CenteredWindow>
                {/* Logotype */}

                {/* Form */}
                {/* <BlockWithShadow> */}
                    {/* <h1>Create Project</h1> */}
                    {/* Title */}
                    {/* Subtitle */}
                    {/* Form */}
                    {/* Buttom Submit */}
                {/* </BlockWithShadow> */}
                {/* Close Icon */}
                <div onClick={() => history(-1)}>
                    <CloseWindow style='fixed' />
                </div>
            </CenteredWindow>
        </div>
    )
}

export default CreateProject