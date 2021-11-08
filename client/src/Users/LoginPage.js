import React from 'react'
import LoginForm from './LoginForm'
import SignUpPage from './SignUpPage'

const LoginPage = ({showSignUp, setShowSignUp}) => {
    return (
        <div>
            {!showSignUp ?
            <LoginForm setShowSignUp={setShowSignUp}/>
            :
            <SignUpPage />
            }
        </div>
    )
}

export default LoginPage
