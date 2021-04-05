import { Button, Container, Row, Col, Form, fieldset } from 'react-bootstrap';


const FormComponent =(props) => {
    const {labelName, type, placeholder, onChangeFn, value} = props
    return <Form.Group controlId="formBasicFirstName">
    <Row>
        <Col sm={3}>
            <Form.Label>{labelName}</Form.Label>
        </Col>
        <Col sm={9}>
            <Form.Control type={type} placeholder={placeholder} onChange={onChangeFn} value={value} />
        </Col>
    </Row>
</Form.Group>

}

export default FormComponent