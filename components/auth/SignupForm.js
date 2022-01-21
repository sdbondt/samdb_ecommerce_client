import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHttpClient } from '../../hooks/httpClient'
import { authActions } from '../../store/auth'
const URL = 'http://localhost:5000/api/v1/auth/signup'

const SignupForm = () => {
    const [signupName, setSignupName] = useState('')
    const [signupEmail, setSignupEmail] = useState('')
    const [signupPassword, setSignupPassword] = useState('')
    const [signupConfirmPassword, setSignupConfirmPassword] = useState('')
    const { isLoading, error, setError, sendRequest, clearError } = useHttpClient()
    const dispatch = useDispatch()

    const changeEmail = (e) => {
        setSignupEmail(e.target.value)
    }

    const changeName = (e) => {
        setSignupName(e.target.value)
    }

    const changePassword = (e) => {
        setSignupPassword(e.target.value)
    }

    const changeConfirmPassword = (e) => {
        setSignupConfirmPassword(e.target.value)
    }

    const signupHandler = async (e) => {
        e.preventDefault()
        const postBody = JSON.stringify({ email: signupEmail, password: signupPassword, confirmPassword: signupConfirmPassword, name: signupName })
        const responseData = await sendRequest(URL, 'POST', postBody)
        dispatch(authActions.login())
        dispatch(authActions.setToken(responseData.token))
        dispatch(authActions.setUser(responseData.data))
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={signupHandler}>
                <label htmlFor="name">Name</label><br />
                <input type="text" id="name" value={signupName} onChange={changeName} /><br />
                <label htmlFor="email">Email</label><br />
                <input type="email" id="email" value={signupEmail} onChange={changeEmail} /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" id="password" value={signupPassword} onChange={changePassword} /><br />
                <label htmlFor="confirmpassword">Confirm your password</label><br />
                <input type="password" id="confirmpassword" value={signupConfirmPassword} onChange={changeConfirmPassword} /><br />                
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignupForm
