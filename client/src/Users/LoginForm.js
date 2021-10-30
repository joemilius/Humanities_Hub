import React, {useState} from 'react'
import Form from 'react-bootstrap'

const LoginForm = () => {
    const {loginData, setLoginData} = useState({
        username: '',
        password: ''
    })

    return (
        <Form>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control className="inputbox" name="username" value={loginData.username}></Form.Control>
                <Form.Label>Password</Form.Label>
                <Form.Control className="inputBox" type="password" name="password" value={loginData.password}></Form.Control>
            </Form.Group>
        </Form>
    )
}

export default LoginForm
