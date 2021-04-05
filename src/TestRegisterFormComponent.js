import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import RegisterForm from './RegisterFormComponent2'

class htmlTest extends React.Component{
    constructor(prop){
        super(prop)
        this.state ={ 
            firstName: '',
            lastName:'',
            screenName:'',
            country:'' , 
            email:'', 
            phone:'', 
            DoB:'',
            MoB:'',
            YoB:'',
    };

    
    }

    render(){

        const createChangeFn = (propName) => (event) => {this.setState({[propName]: event.target.value})}

        return <Container>
        <Row>
            <Col>

                <RegisterForm firstName={this.state.firstName} lastName={this.state.lastName} screenName={this.state.screenName} 
                country={this.state.country} email = {this.state.email} phone = {this.state.phone} DoB ={this.state.DoB}
                MoB={this.state.MoB} YoB={this.state.YoB} 
                
                setFirstNameFn = {createChangeFn('firstName')}
                setLastNameFn ={createChangeFn('lastName')}

                clickFn={() =>{console.log(this.state.firstName)}} />
            </Col>
        </Row>
    </Container>
    }
}


export default htmlTest