import React from 'react'
import SignUpForm from './SignUpForm'

const SignUpPage = ({setUser, setErrors}) => {
    return (
        <div>
            <SignUpForm setUser={setUser} setErrors={setErrors}/>
        </div>
    )
}

export default SignUpPage
