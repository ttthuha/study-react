import axios from 'axios'
import React from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';


class Login extends React.Component {
  constructor(props) {
    super(props);

  }

  state = {
    firstName: '',
  }

  componentDidMount() {

  }

  handleLogin() {

    const customerInfor = {
      firstName: this.state.firstName,

    };

    axios.post(`https://localhost:44363/login`, customerInfor)
      .then(res => {
        const jsonData = res.data;
        console.log(jsonData);
      }).catch((err) => { console.error(err) })

    localStorage.setItem('abc', JSON.stringify({ firstName: this.state.firstName }))
  }

  render() {
    const createChangeEvent = (propName) => (x) => this.setState({ [propName]: x.target.value })

    return <Form>
      <Form.Group controlId="formBasicname">
        <Form.Control type="name" placeholder="name" onChange={createChangeEvent('firstName')} value={this.state.firstName} />
      </Form.Group>
      <Button type="submit" onClick={this.handleLogin} >Login</Button>
    </Form>
  }
}
export default Login
