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

        const createChangeEvent = (propName) => (x) => this.setState({[propName]: x.target.value})

        return <Form>
            <h1>REGISTER</h1>
            <p>Create your account. It's free and only takes a minute.</p>
            <Form.Group controlId="formBasicName">
                <Row>
                <Col sm ={6}>
                <Form.Control type="firstName" placeholder="First name" onChange={createChangeEvent ('firstName')} value={this.state.firstName}/>
                </Col>
                <Col sm ={6}>
                <Form.Control type="lastName" placeholder="Last name" onChange={createChangeEvent ('lastName')} value={this.state.lastName}/>
                </Col>
                </Row>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" onChange= {createChangeEvent ('email')} value={this.state.email}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" onChange={createChangeEvent ('password')} value={this.state.password} />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassqoed">
                <Form.Control type="confirmPassword" placeholder="Confirm password" onChange={createChangeEvent ('confirmPassword')} value={this.state.confirmPassword}/>
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