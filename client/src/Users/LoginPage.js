import React from 'react'
import LoginForm from './LoginForm'
import SignUpPage from './SignUpPage'
import Errors from './Errors'

const LoginPage = ({showSignUp, setShowSignUp, setUser, errors, setErrors}) => {
    return (
        <div>
            {!showSignUp ?
            <LoginForm setShowSignUp={setShowSignUp} setUser={setUser} setErrors={setErrors}/>
            :
            <SignUpPage setUser={setUser} setErrors={setErrors}/>
            }
                <Errors>{errors}</Errors>
            {/* {errors && errors.map((err) => (
            ))} */}
        </div>
    )
}

export default LoginPage
