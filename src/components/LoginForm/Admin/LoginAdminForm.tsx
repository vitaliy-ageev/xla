import React, { FunctionComponent, useEffect, useState } from 'react'
import { adminAPI } from '../../../services/admin/AdminService'
import { useNavigate } from 'react-router-dom'
import { adminSlice, setIsAdmin } from '../../../store/reducers/adminSlice/adminSlice'
import { useDispatch } from 'react-redux'
import { useLoginAdminMutation } from '../../../services/admin/AuthAdminService'
import Title from '../../UI/Form/Title/Title'
import Input from '../../UI/Form/Input/Input'
import ButtonSubmit from '../../UI/Form/ButtonSubmit/ButtonSubmit'
import Form from '../../UI/Form/Form'

const initialState = {
    username: "",
    password: "",
}

interface IResponseData {
    user_id: number,
    access_token: string,
    refresh_token: string,
    expires_in: number,
}

const LoginAdminForm: FunctionComponent = (prop) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { setAuthAdmin, setLogOutAdmin } = adminSlice.actions
    const [formValue, setFormValue] = useState(initialState)
    const { username, password } = formValue
    const [loginAdmin,
        {
            data: loginData,
            isSuccess: isLoginSuccess,
            isError: isLoginError,
            error: loginError
        }
    ] = useLoginAdminMutation()

    const handleChange = (e: any) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const handleLogin = async () => {
        try {
            if (username && password) {
                const userData: any = await loginAdmin({ username, password }).unwrap()
                if (userData) {
                    dispatch(setAuthAdmin(userData))
                }
                setFormValue(initialState)
            }
        } catch (e: any) {
            if (!e?.response) {
                // No Server Response
            } else if (e.response?.status === 400) {
                // missing username or password
            } else if (e.response?.status === 401) {
                // unauthorized
            } else {
                // login failed
            }
        }

    }

    useEffect(() => {
        if (isLoginSuccess) {
            navigate("/metamall")
        }
    }, [isLoginSuccess])

    return (
        <>
            <Form action='post'>
                {/* Title */}
                <Title title='Log in to your account' marginBottom={25} />
                {/* Email */}
                <Input label='Username'
                    name='username'
                    type='text'
                    placeholder='admin'
                    value={username}
                    onChange={handleChange}
                />
                {/* Password */}
                <Input label='Password'
                    name='password'
                    type='password'
                    placeholder='●●●●●●●●'
                    value={password}
                    onChange={handleChange}
                />
                {/* Button Submit */}
                <ButtonSubmit
                    name="Log In"
                    type="button"
                    onClick={handleLogin}
                />
            </Form>
        </>
    )
}

export default LoginAdminForm