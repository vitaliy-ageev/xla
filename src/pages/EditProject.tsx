import React, { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import EditProjectForm from '../components/EditProjectForm/EditProjectForm'
import BlockWithShadow from '../components/UI/BlockWithShadow/BlockWithShadow'
import CenteredWindow from '../components/UI/CenteredWindow/CenteredWindow'
import CloseWindow from '../components/UI/Icons/CloseWindow/CloseWindow'
import XLA from '../components/UI/Logotype/XLA/XLA'

const EditProject: FunctionComponent = (props) => {
    const history = useNavigate()
    return (
        <div className='App'>
            <CenteredWindow>
                {/* Logo */}
                <XLA />
                {/* Form */}
                <BlockWithShadow>
                    <EditProjectForm />
                </BlockWithShadow>
                {/* Close Icon */}
                <div onClick={() => history(-1)}>
                    <CloseWindow style='fixed' />
                </div>
            </CenteredWindow>
        </div>
    )
}

export default EditProject