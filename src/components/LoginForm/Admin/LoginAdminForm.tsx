import React, { FunctionComponent, useEffect, useState } from 'react'
import classes from '@/assets/styles/form/form.module.scss'
import { authAdminAPI } from '../../../services/AuthAdminService'
import { useNavigate } from 'react-router-dom'
import { adminSlice } from '../../../store/reducers/adminSlice/adminSlice'
import { useDispatch } from 'react-redux'

const initialState = {
    username: "",
    password: "",
}

const LoginAdminForm: FunctionComponent = (prop) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { setAdminAuth } = adminSlice.actions
    const [formValue, setFormValue] = useState(initialState)
    const { username, password } = formValue
    const [loginAdmin,
        {
            data: loginData,
            isSuccess: isLoginSuccess,
            isError: isLoginError,
            error: loginError
        }
    ] = authAdminAPI.useLoginAdminMutation()

    const handleChange = (e: any) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const handleLogin = async () => {
        if (username && password) {
            await loginAdmin({ username, password })
        } else {

        }
    }

    useEffect(() => {
        if (isLoginSuccess) {
            dispatch(setAdminAuth(true))
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