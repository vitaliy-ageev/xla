import React, { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginAdminForm from '../components/LoginForm/Admin/LoginAdminForm'
import BlockWithShadow from '../components/UI/BlockWithShadow/BlockWithShadow'
import CenteredWindow from '../components/UI/CenteredWindow/CenteredWindow'
import CloseWindow from '../components/UI/Icons/CloseWindow/CloseWindow'

const LoginAdmin: FunctionComponent = (props) => {
    const history = useNavigate();

    return (
        <div className='App'>
            <CenteredWindow>
                <BlockWithShadow>
                    <LoginAdminForm />
                    {/* Close Icon */}
                    <div onClick={() => history(-1)}>
                        <CloseWindow style='fixed' />
                    </div>
                </BlockWithShadow>
            </CenteredWindow>
        </div>
    )
}

export default LoginAdmin