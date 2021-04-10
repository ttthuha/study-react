
import axios from 'axios'
import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';

class UserList extends React.Component {
    constructor(prop) {
        super(prop);
        this.createViewDetailFn = this.createViewDetailFn.bind(this);
        this.createUserDetail = this.createUserDetail.bind(this);
        this.createComponent = this.createComponent.bind(this);
        this.createLoadUserList = this.createLoadUserList.bind(this);
    }

    state = {
        users: [],
        isViewDetail: false,
        userSelected: null,
        isLoading: false,
    }

    // componentDidMount() {
    //     axios.get(`https://gorest.co.in/public-api/users`)
    //         .then(res => {
    //             const jsonData = res.data;
    //             this.setState({ users: jsonData.data });
    //         })
    // }

    createComponent() {
        if (!this.state.isLoading)
            return null;
        return <p>Loading</p>
    }

    createLoadUserList() {
        return () => {
            this.setState({ isLoading: true, users: [] })
            axios.get(`https://gorest.co.in/public-api/users`).then(res => {
                const jsonData = res.data;
                console.log(jsonData);
                this.setState({ users: jsonData.data, isLoading: false });
            })
            // axios.get(`https://localhost:44363/products?productName=abc`).then(res => {
            //     const jsonData = res.data;
            //     console.log(jsonData);
            // })

            // const productId=1
            // axios.get(`https://localhost:44363/products/${productId}`).then(res => {
            //     const jsonData = res.data;
            //     console.log(jsonData);
            // })

            // axios.put(`https://localhost:44363/products/${productId}`, {produtName: 'ten prod moi' }).then(res => {
            //     const jsonData = res.data;
            //     console.log(jsonData);
            // })

            // axios.post(`https://localhost:44363/products`, {
            //     "productName": "Trek 820 - 2016",
            //     "brandId": 9,
            //     "categoryId": 6,
            //     "modelYear": 2016,
            //     "listPrice": 379.99,
            //     }).then(res => {
            //     const jsonData = res.data;
            //     console.log(jsonData);
            // })
        }
    }

    createViewDetailFn(i) {
        return () => this.setState({ isViewDetail: true, userSelected: this.state.users[i]});
    }

    createUserDetail() {
        if (!this.state.isViewDetail)
            return null;

        return <div>
            <p>Name: {this.state.userSelected.name}</p>
            <p>Email: {this.state.userSelected.email} </p>
            <p>Gender: {this.state.userSelected.gender} </p>
            <Button onClick={() => {
                this.setState({ isViewDetail: false });
            }}>Close</Button>
        </div>
    }
    
    createUser(user, i) {
        return <Row>
            <Col sm={5}>{user.name} </Col>
            <Col>
                <Button variant="success" onClick={this.createViewDetailFn(i)}>View</Button>
            </Col>
        </Row>
    }

    render() {

        return (
            <div className="app">
                <Button onClick={this.createLoadUserList()}>LOAD</Button>
                {this.createComponent()}

                <Container>
                    <Row>
                        <Col sm={6}>
                            {this.state.users.map((x, i) => this.createUser(x, i))}
                        </Col>
                        <Col sm={6}>
                            {this.createUserDetail()}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default UserList