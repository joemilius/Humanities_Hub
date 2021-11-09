import React from 'react'
import LoginForm from './LoginForm'
import SignUpPage from './SignUpPage'

const LoginPage = ({showSignUp, setShowSignUp, setUser}) => {
    return (
        <div>
            {!showSignUp ?
            <LoginForm setShowSignUp={setShowSignUp} setUser={setUser}/>
            :
            <SignUpPage setUser={setUser}/>
            }
        </div>
    )
}

export default LoginPage
