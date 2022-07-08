import React, { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateTagForm from '../components/CreateTagForm/CreateTagForm'
import BlockWithShadow from '../components/UI/BlockWithShadow/BlockWithShadow'
import CenteredWindow from '../components/UI/CenteredWindow/CenteredWindow'
import CloseWindow from '../components/UI/Icons/CloseWindow/CloseWindow'
import XLA from '../components/UI/Logotype/XLA/XLA'

const CreateTag: FunctionComponent = (props) => {
    const history = useNavigate()
    return (
        <div className='App'>
            <CenteredWindow>
                {/* Logo */}
                <XLA />
                {/* Form */}
                <BlockWithShadow>
                    <CreateTagForm />
                </BlockWithShadow>
                {/* Close Icon */}
                <div onClick={() => history(-1)}>
                    <CloseWindow style='fixed' />
                </div>
            </CenteredWindow>
        </div>
    )
}

export default CreateTag