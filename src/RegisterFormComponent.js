import React from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap';

class registerForm extends React.Component {

    constructor(prop) {
        super(prop)
        this.state = {
            firstName: '',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    render() {
        return <Form>
            <h1>REGISTER</h1>
            <p>Create your account. It's free and only takes a minute.</p>
            <Form.Group controlId="formBasicName">
                <Row>
                <Col sm ={6}>
                <Form.Control type="firstName" placeholder="First name" onChange={(x) => {this.state({firstName: x.target.value})}} value={this.state.firstName}/>
                </Col>
                <Col sm ={6}>
                <Form.Control type="lastName" placeholder="Last name" onChange={(x) => {this.state({lastName: x.target.value})}} value={this.state.lastName}/>
                </Col>
                </Row>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" onChange={(x) => {this.state({email: x.target.value})}} value={this.state.email}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" onChange={(x) => {this.state({password: x.target.value})}} value={this.state.password} />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassqoed">
                <Form.Control type="confirmPassword" placeholder="Confirm password" onChange={(x) => {this.state({confirmPassword: x.target.value})}} value={this.state.confirmPassword}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I accept the Terms of Use & Privacy Policy" />
            </Form.Group>

            <Button variant="success" type="submit" onClick={()=>(console.log(this.state.firstName))}>
                Register Now
            </Button>
        </Form>


    }
}

export default registerForm