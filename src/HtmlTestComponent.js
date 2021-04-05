import React from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import LogInForm from './HtmlTestComponent2'

class htmlTest extends React.Component{
    constructor(prop){
        super(prop)
        this.state ={ 
            username: '',
            password:'',
            
    }
    }

    render(){
        return <Container>
        <Row>
            <Col>
                <LogInForm username={this.state.username} password={this.state.password} setUsernameFn = {(x) =>{this.setState({username: x.target.value})}} click={() =>{console.log(this.state.username)}} />
            </Col>
        </Row>
    </Container>
    }
}


export default htmlTest

