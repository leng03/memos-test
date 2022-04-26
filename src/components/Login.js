// First parameter is an object containing all
//    properties that are passed into this
//    component
import {useState} from "react";
import {Button, Card, Form, Row} from "react-bootstrap";

function Login(properties) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function sendCredentials() {
        properties.onLogin({username, password})
    }

    function onUsernameChange(event) {
        setUsername(event.target.value)
    }

    function onPasswordChange(event) {
        setPassword(event.target.value)
    }

    return <Card>
        <Card.Header className={"text-center"}>
            <h3>Login</h3>
        </Card.Header>
        <Card.Body>
            <Form>
                <Form.Group className={"m-2"}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' placeholder='Username' onChange={onUsernameChange}/>
                </Form.Group>
                <Form.Group className={"m-2"}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='text' placeholder='Password' onChange={onPasswordChange}/>
                </Form.Group>
                <Row className={"p-3"}>
                    <Button variant={"primary"} onClick={sendCredentials}>Submit</Button>
                </Row>
            </Form>
        </Card.Body>
    </Card>
}

export default Login