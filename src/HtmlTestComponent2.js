import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import LogInForm from './HtmlTestComponent2'

const HtmlTets2 = (props) =>{
    const {username, password , setUsernameFn, setPasswordFn, click} =props;
    

    return <Container>
    <Row>
        <Col>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={setUsernameFn} value={username}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={setPasswordFn} value={password}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={click}> 
                    Submit 
                </Button>
            </Form>
        </Col>
    </Row>
</Container>
}

export default HtmlTets2