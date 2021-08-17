import React from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'
import { Row, Col, Button, Table, Container } from 'react-bootstrap';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.createOrders = this.createOrders.bind(this)
  }

  state = {
    product: {orders: [], stores: []}
    
  }

  componentDidMount() {
    console.log(1);
    const productId = this.props.match.params.productId;

    this.setState({ product: {}});

    axios.get(`https://localhost:44363/products/${productId}`).then(res => {
      const jsonData = res.data;
      console.log(jsonData);
      this.setState({ product: jsonData});
      
    })
  }

  componentDidUpdate() {
    console.log(2)
  }

  createOrders(order) {
    return <tr>
      <td>{order.orderName}</td>
      <td>{order.customerName}</td>
    </tr>
  }

  render() {
    return <Container>
      <Row>
        <Col sm={12}>
          <h3>Product infor</h3>
          <p>Product ID: {this.state.product.productId}</p>
          <p>Product Name: {this.state.product.productName}</p>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <h3> Orders</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Order id</th>
                <th>Customer name</th>
              </tr>
            </thead>
            <tbody>
              {this.state.product.orders?.map((x) => this.createOrders(x))}
            </tbody>
          </Table>
        </Col>

        <Col sm={6}>
          <h3> Stores </h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Store name</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  }
}
export default withRouter(ProductDetail)