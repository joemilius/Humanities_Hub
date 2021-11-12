import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'

const SignUpForm = ({setUser, setErrors}) => {
    const [signUpData, setSignUpData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: ''
    })

    function handleSignup(event) {
        setSignUpData({...signUpData,
            [event.target.name] : event.target.value
        })
    }

    function signUpSubmit(event) {
        event.preventDefault()
        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
            "Content-Type": "Application/json"
            },
            body: JSON.stringify(signUpData)
        }).then((resp) => {
            if (resp.ok) {
                resp.json().then((user) => setUser(user));
            } else {
                resp.json().then((err) => {
                    console.log(err.error)
                    setErrors(err.error)
                });
            }
        })
    }

    return (
        <Form onSubmit={signUpSubmit}>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control classname="inputbox" name="first_name" value={signUpData.first_name} onChange={handleSignup}></Form.Control>
                <Form.Label>Last Name</Form.Label>
                <Form.Control classname="inputbox" name="last_name" value={signUpData.last_name} onChange={handleSignup}></Form.Control>
                <Form.Label>Email</Form.Label>
                <Form.Control classname="inputbox" name="email" value={signUpData.email} onChange={handleSignup}></Form.Control>
                <Form.Label>Username</Form.Label>
                <Form.Control classname="inputbox" name="username" value={signUpData.username} onChange={handleSignup}></Form.Control>
                <Form.Label>Password</Form.Label>
                <Form.Control classname="inputbox" type="password" name="password" value={signUpData.password} onChange={handleSignup}></Form.Control>
            </Form.Group>
            <Button variant='custom' type='submit'>SignUp</Button>
        </Form>
    )
}

export default SignUpForm
