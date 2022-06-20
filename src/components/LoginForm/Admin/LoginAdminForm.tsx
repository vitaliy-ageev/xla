import React, { FunctionComponent, useState } from 'react'
import classes from '@/assets/styles/form/form.module.scss'
import { authAdminAPI } from '../../../services/AuthAdminService'

const initialState = {
    email: "",
    password: "",
}

const LoginAdminForm: FunctionComponent = (prop) => {
    const [formValue, setFormValue] = useState(initialState)
    const { email, password } = formValue
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
        if (email && password) {

        }
    }

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
                    <label htmlFor="email"
                        className={classes.form_label}>
                        Email
                    </label>
                    <input type="email"
                        name='email'
                        value={email}
                        onChange={handleChange}
                        placeholder='example@mail.com'
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
                    type='submit'
                    onClick={() => handleLogin()}>
                    Log In
                </button>
            </form>
        </>
    )
}

export default LoginAdminForm