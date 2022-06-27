import React, { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateProjectForm from '../components/CreateProjectForm/Admin/CreateProjectForm'
import BlockWithShadow from '../components/UI/BlockWithShadow/BlockWithShadow'
import CenteredWindow from '../components/UI/CenteredWindow/CenteredWindow'
import CloseWindow from '../components/UI/Icons/CloseWindow/CloseWindow'

const CreateProject: FunctionComponent = (props) => {
    const history = useNavigate();
    return (
        <div className='App'>
            <CenteredWindow>
                {/* Logotype */}

                {/* Form */}
                <BlockWithShadow>
                    <CreateProjectForm />
                    {/* Title */}
                    {/* Subtitle */}
                    {/* Form */}
                    {/* Buttom Submit */}
                </BlockWithShadow>
                {/* Close Icon */}
                <div onClick={() => history(-1)}>
                    <CloseWindow style='fixed' />
                </div>
            </CenteredWindow>
        </div>
    )
}

export default CreateProject