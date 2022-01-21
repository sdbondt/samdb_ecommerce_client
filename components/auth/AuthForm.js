import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const AuthForm = () => {
    const [showLogin, setShowLogin] = useState(true)
    const toggleShowLogin = () => {
        setShowLogin((prevState) => !prevState)
    }

    if (showLogin) {
        return (
            <React.Fragment>
                <LoginForm />
                <button onClick={toggleShowLogin}>No account? Sign up!</button>
            </React.Fragment>
        )
    } else {
        return (<React.Fragment>
                <SignupForm />
                <button onClick={toggleShowLogin}>Already got an account? Login in!</button>
            </React.Fragment>)
    }
}

export default AuthForm
