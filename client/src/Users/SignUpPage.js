import React from 'react'
import SignUpForm from './SignUpForm'

const SignUpPage = ({setUser}) => {
    return (
        <div>
            <SignUpForm setUser={setUser}/>
        </div>
    )
}

export default SignUpPage
