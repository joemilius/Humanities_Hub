import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'

const SignUpForm = ({setUser}) => {
    const [signupData, setSignupData] = usestate({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: ''
    })

    function handleSignup(event) {
        setSignupData({...signupData,
            [event.target.name] : event.target.value
        })
    }

    function signupSubmit(event) {
        event.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
            "Content-Type": "Application/json"
            },
            body: JSON.stringify(signupData)
        }).then((resp) => {
            if (resp.ok) {
                resp.json().then((user) => setUser(user));
            } else {
                resp.json().then((err) => {
                    console.log(err)
                    // setErrors(err.errors)
                });
            }
        })
    }

    return (
        <Form onSubmit={signupSubmit}>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control classname="inputbox" name="first_name" value={signupData.first_name} onChange={handleSignup}></Form.Control>
                <Form.Label>Last Name</Form.Label>
                <Form.Control classname="inputbox" name="last_name" value={signupData.last_name} onChange={handleSignup}></Form.Control>
                <Form.Label>Email</Form.Label>
                <Form.Control classname="inputbox" name="email" value={signupData.email} onChange={handleSignup}></Form.Control>
                <Form.Label>Username</Form.Label>
                <Form.Control classname="inputbox" name="username" value={signupData.username} onChange={handleSignup}></Form.Control>
                <Form.Label>Password</Form.Label>
                <Form.Control classname="inputbox" name="password" value={signupData.password} onChange={handleSignup}></Form.Control>
            </Form.Group>
            <Button variant='custom' type='submit'>SignUp</Button>
        </Form>
    )
}

export default SignUpForm
