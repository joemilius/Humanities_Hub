import React from 'react'
import LoginForm from './LoginForm'
import SignUpPage from './SignUpPage'
import Errors from './Errors'

const LoginPage = ({showSignUp, setShowSignUp, setUser, errors, setErrors, setUserGroups}) => {
    return (
        <div>
            {!showSignUp ?
            <LoginForm setShowSignUp={setShowSignUp} setUser={setUser} setErrors={setErrors} setUserGroups={setUserGroups}/>
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
