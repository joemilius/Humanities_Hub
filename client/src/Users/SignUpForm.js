import React, {useState} from 'react'
import Form from 'react-bootstrap'

const SignUpForm = () => {
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


    return (
        <Form onSubmit={}>
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
