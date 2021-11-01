import React, {useState} from 'react'
import Form from 'react-bootstrap'

const SignUpForm = () => {
    const [signupData, setSignupData] = usestate({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: ''
    })

    function handleSignup(event) {
        setSignupData({...loginData,
            [event.target.name] : event.target.value
        })
    }


    return (
        <Form onSubmit={}>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control classname="inputbox" name="first_name" onChange={handleSignup}></Form.Control>
                <Form.Label>Last Name</Form.Label>
                <Form.Control classname="inputbox" name="last_name" onChange={handleSignup}></Form.Control>
                <Form.Label>Username</Form.Label>
                <Form.Control classname="inputbox" name="username" onChange={handleSignup}></Form.Control>
                <Form.Label>Email</Form.Label>
                <Form.Control classname="inputbox" name="email" onChange={handleSignup}></Form.Control>
                <Form.Label>Password</Form.Label>
                <Form.Control classname="inputbox" name="password" onChange={handleSignup}></Form.Control>
            </Form.Group>
        </Form>
    )
}

export default SignUpForm
