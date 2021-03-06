import React from 'react'
import { Button, Container, Row, Col, Form, fieldset } from 'react-bootstrap';

import FormField from './FormComponent'

const registerForm = (props) => {
    const { firstName, lastName, screenName, country, email, phone,
        setFirstNameFn, setLastNameFn, setScreenNameFn, setCountryFn, setGenderFn, setEmailFn, setPhoneFn, clickFn } = props;


    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = [];
    for (let i = 1; i <= 31; i++) {
        day.push(i);
    }
    const year = [];
    for (let j = 1900; j <= 2021; j++) {
        year.push(j);
    }

    var country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola"]
    return <Form>
        <FormField labelName="First name" type ="firstname" placeholder="Enter first name" onChangeFn={setFirstNameFn} value ={firstName}/>

        <FormField labelName="Last name" type="lastName" placeholder="Enter Last name" onChangeFn={setLastNameFn} value={lastName}/>

        <FormField labelName="Screen name" type="screenName" placeholder="Enter Screen name" onChangeFn={setScreenNameFn} value={screenName}/>

        <Form.Group controlId="formBasicDoB">
            <Row>
                <Col sm={3}>
                    <Form.Label>Date of Birth</Form.Label>
                </Col>
                <Col sm={3}>
                    <Form.Control as="select" size="sm" custom>
                        {month.map((x, index) => <option key={index}>{x}</option>)}
                    </Form.Control>
                </Col>
                <Col sm={3}>
                    <Form.Control as="select" size="sm" custom>
                        {day.map((x, index) => <option key={index}>{x}</option>)}
                    </Form.Control>
                </Col>
                <Col sm={3}>
                    <Form.Control as="select" size="sm" custom>
                        {year.map((x, index) => <option key={index}>{x}</option>)}
                    </Form.Control>
                </Col>
            </Row>
        </Form.Group>

        <Form.Group controlId="formBasicCountry">
            <Row>
                <Col sm={3}>
                    <Form.Label>Country</Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control as="select" size="sm">
                        {country_list.map((x, index) => <option key={index}>{x}</option>)}
                    </Form.Control>
                </Col>
            </Row>
        </Form.Group>
        
        <fieldset>
        <Form.Group controlId= "BasicFormGender">
            <Row>
                <Col sm={3}>
                    <Form.Label>Gender</Form.Label>
                </Col>
                <Col sm={2}>

                    <Form.Check
                        type="radio"
                        label="Male"
                        onChange={setGenderFn}
                        value = "male"
                    />
                </Col>
                <Col sm={2}>
                    <Form.Check
                        type="radio"
                        label="Female"
                        onChange={setGenderFn}
                        value = "female"   
                    />
                </Col>
            </Row>
        </Form.Group>
        </fieldset>

        <FormField labelName="Email" type="email" placeholder="Enter Email" onChangeFn={setEmailFn} value={email}/>
        
        <FormField labelName="Phone" type="phone" placeholder="Enter Phone" onChangeFn={setPhoneFn} value={phone}/>

        <Button variant="success" type="submit" onClick={clickFn}>
            Register Now
        </Button>
    </Form>

}


export default registerForm