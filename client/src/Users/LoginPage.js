import React from 'react'
import LoginForm from './LoginForm'
import SignUpPage from './SignUpPage'

const LoginPage = ({showSignUp, setShowSignUp, setUser, errors, setErrors}) => {
    return (
        <div>
            {!showSignUp ?
            <LoginForm setShowSignUp={setShowSignUp} setUser={setUser} setErrors={setErrors}/>
            :
            <SignUpPage setUser={setUser} setErrors={setErrors}/>
            }
            {errors && errors.map((err) => (
                <Errors key={err}>{err}</Errors>
            ))}
        </div>
    )
}

export default LoginPage
