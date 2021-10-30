import React from 'react'
import Form from 'react-bootstrap'

const LoginForm = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control className="inputbox" name="username" value={}></Form.Control>
                <Form.Label></Form.Label>
                <Form.Control className="inputBox" type="password" name="password" value={}></Form.Control>
            </Form.Group>
        </Form>
    )
}

export default LoginForm
