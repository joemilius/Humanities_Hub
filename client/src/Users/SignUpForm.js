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
    return (
        <Form>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control classname="inputbox" name="first_name"></Form.Control>
                <Form.Label>Last Name</Form.Label>
                <Form.Control classname="inputbox" name="last_name"></Form.Control>
                <Form.Label>Username</Form.Label>
                <Form.Control classname="inputbox" name="username"></Form.Control>
                <Form.Label>Email</Form.Label>
                <Form.Control classname="inputbox" name="email"></Form.Control>
                <Form.Label>Password</Form.Label>
                <Form.Control classname="inputbox" name="password"></Form.Control>
            </Form.Group>
        </Form>
    )
}

export default SignUpForm
