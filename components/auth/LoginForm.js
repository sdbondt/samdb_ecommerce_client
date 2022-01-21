import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHttpClient } from "../../hooks/httpClient"
import { authActions } from "../../store/auth"
import ErrorModal from '../UI/ErrorModal'

const URL = 'http://localhost:5000/api/v1/auth/login'

const LoginForm = () => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const { isLoading, error,  sendRequest, clearError } = useHttpClient()
    const dispatch = useDispatch()

    const changePasswordHandler = (e) => {
        setLoginPassword(e.target.value)
    }

    const changeEmailHandler = (e) => {
        setLoginEmail(e.target.value)
    }

    const loginHandler = async (e) => {
        e.preventDefault()
        const postBody = JSON.stringify({ email: loginEmail, password: loginPassword })
        const responseData = await sendRequest(URL, 'POST', postBody)
        dispatch(authActions.login())
        dispatch(authActions.setToken(responseData.token))
        dispatch(authActions.setUser(responseData.data))
    }

    if (isLoading) {
        return <p>loading...</p>
    }

    return (
        <div>
        {error && (
            <ErrorModal
              message={error}
              onConfirm={clearError}
            />
          )}
            <h2>Login</h2>
            <form onSubmit={loginHandler}>
                <label htmlFor="email">Email</label><br />
                <input type="email" id="email" onChange={changeEmailHandler} value={loginEmail} /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" id="password" onChange={changePasswordHandler} value={loginPassword} /><br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginForm
