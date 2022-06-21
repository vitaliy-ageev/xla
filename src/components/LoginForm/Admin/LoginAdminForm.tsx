import React, { FunctionComponent, useEffect, useState } from 'react'
import classes from '@/assets/styles/form/form.module.scss'
import { adminAPI } from '../../../services/admin/AdminService'
import { useNavigate } from 'react-router-dom'
import { adminSlice } from '../../../store/reducers/adminSlice/adminSlice'
import { useDispatch } from 'react-redux'
import { useLoginAdminMutation } from '../../../services/admin/AuthAdminService'

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
    const {setAuthAdmin, logOutAdmin } = adminSlice.actions
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
                const userData: any = await loginAdmin({ username, password })
                const user_id = userData?.data?.user_id
                const access_token = userData?.data?.access_token
                dispatch(setAuthAdmin({ ...userData, user_id, access_token }))
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
            <form className={classes.form}
                method="POST">
                {/* Title */}
                <h1 className={classes.form_title}>
                    Log in to your account
                </h1>
                {/* Email */}
                <div className={classes.form_container}>
                    <label htmlFor="username"
                        className={classes.form_label}>
                        Username
                    </label>
                    <input type="text"
                        name='username'
                        value={username}
                        onChange={handleChange}
                        placeholder='admin'
                        autoComplete='off'
                        className={classes.form_input} />
                </div>
                {/* Password */}
                <div className={classes.form_container}>
                    <label htmlFor="password"
                        className={classes.form_label}>
                        Password
                    </label>
                    <input type="password"
                        name='password'
                        value={password}
                        onChange={handleChange}
                        placeholder='●●●●●●●●'
                        autoComplete='off'
                        className={classes.form_input} />
                </div>
                {/* Button Submit */}
                <button className={classes.form_button_submit}
                    type='button'
                    onClick={() => handleLogin()}>
                    Log In
                </button>
            </form>
        </>
    )
}

export default LoginAdminForm