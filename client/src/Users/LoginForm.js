import React, {useState} from 'react'
import Form from 'react-bootstrap'

const LoginForm = ({}) => {
    const {loginData, setLoginData} = useState({
        username: '',
        password: ''
    })

    function handleLogin(event) {
        setLoginData({...loginData,
            [event.target.name] : event.target.value
        })
    }

    return (
        <Form onSubmit={}>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control className="inputbox" name="username" value={loginData.username} onChange={handleLogin}></Form.Control>
                <Form.Label>Password</Form.Label>
                <Form.Control className="inputBox" type="password" name="password" value={loginData.password} onChange={handleLogin}></Form.Control>
            </Form.Group>
            <Button variant='custom' type='submit'>Login</Button>
            <Button variant='custom' onClick={()=> setShowSignUp(true)}>Sign Up</Button>
        </Form>
    )
}

export default LoginForm
