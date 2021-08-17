import axios from 'axios'
import React from 'react';
import { Row, Col, Button, Container, Form, Table, Alert, Toast } from 'react-bootstrap';
import {
  Link
} from 'react-router-dom'

class ProductManager extends React.Component {
  constructor(prop) {
    super(prop);
    this.createLoadProductList = this.createLoadProductList.bind(this);
    this.createProduct = this.createProduct.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addProduct = this.addProduct.bind(this)
    this.handleFindProduct = this.handleFindProduct.bind(this);
    this.findProductUI = this.findProductUI.bind(this);
    this.getBrand = this.getBrand.bind(this)
  }

  state = {
    products: [],
    brandList: [],
    categoryList: [],
    productSelected: [],
    productId: '',
    productName: '',
    modelYear: '',
    isLoading: false,
    isFinding: true,
    isAddProduct: false
  }

  componentDidMount() {

    this.createBrandList();
  }


  getBrand(brandId) {
    return this.state.brandList.find((x, i) => {
      if (x.brandId == brandId)
        return true
      else
        return false
    })
  }

  getCategory(categoryId) {
    return this.state.categoryList.find((x, i) => {
      return x.categoryId == categoryId
    })
  }
  createLoadProductList() {
    this.setState({ products: [], isLoading: true })

    axios.get(`https://localhost:44363/products`).then(res => {
      const jsonData = res.data;
      console.log(jsonData);
      this.setState({
        products: jsonData.map(t => ({
          ...t,
          brand: this.getBrand(t.brandId),
          category: this.getCategory(t.categoryId)
        })), isLoading: false
      });
    })
  }

  createBrandList() {
    this.setState({ brandList: [] })

    axios.get(`https://localhost:44363/brands`).then(res => {
      const jsonData = res.data;
      console.log(jsonData);
      this.setState({ brandList: jsonData });

      this.createCategoryList();
    })
  }

  createCategoryList() {
    this.setState({ categoryList: [] })

    axios.get(`https://localhost:44363/categories`).then(res => {
      const jsonData = res.data;
      console.log(jsonData);
      this.setState({ categoryList: jsonData });
      this.createLoadProductList();
    })
  }

  createProduct(product) {
    return <tr>
      <td>{product.productName}</td>
      <td>{product.brand.brandName}</td>
      <td>{product.category.categoryName}</td>
      <td>{product.listPrice}</td>
      <td>{product.modelYear}</td>
      <Link to={`/products/${product.productId}`}></Link>
    </tr>
  }

  createChangeEvent = (propName) => (x) => {
    this.setState({ [propName]: x.target.value });
    console.log(propName, x.target.value)
  }



  handleSubmit() {

    const product = {
      productName: this.state.productName,
      modelYear: parseInt(this.state.modelYear),
      brandId: parseInt(this.state.brandId),
      categoryId: parseInt(this.state.categoryId),
      listPrice: 379.99,
    };

    axios.post(`https://localhost:44363/products`, product)
      .then(res => {
        const jsonData = res.data;
        console.log(jsonData);
        this.createLoadProductList()
      }).catch((err) => { console.error(err) })
  }

  createAddProductsFn() {
    this.setState({ isAddProduct: true })
  }

  addProduct() {
    if (!this.state.isAddProduct)
      return null;
    return (
      <Form.Group>
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" onChange={this.createChangeEvent('productName')} value={this.state.productName} />
        <Form.Label>Model Year</Form.Label>
        <Form.Control type="text" onChange={this.createChangeEvent('modelYear')} value={this.state.modelYear} />
        <Form.Label>Brand Id</Form.Label>
        <Form.Control as="select" size="sm" onChange={this.createChangeEvent('brandId')} value={this.state.brandId}>{this.state.brandList.map((x, index) => <option key={index} value={x.brandId}>{x.brandName}</option>)}</Form.Control>
        <Form.Label>Category Id</Form.Label>
        <Form.Control as="select" size="sm" onChange={this.createChangeEvent('categoryId')} value={this.state.categoryId}>{this.state.categoryList.map((x, index) => <option key={index} value={x.categoryId}>{x.categoryName} </option>)}</Form.Control>

        <Button type="submit" onClick={this.handleSubmit}>Add</Button>

        <Button onClick={() => {
          this.setState({ isAddProduct: false });
        }}>Close</Button>
      </Form.Group>

    )
  }

  handleFindProduct() {

    this.setState({ products: [], isFinding: true });

    axios.get(`https://localhost:44363/products/?productName=${this.state.productName}`).then(res => {
      const jsonData = res.data;
      console.log(jsonData);
      this.setState({ 
        products: jsonData.map(t => ({
        ...t,
        brand: this.getBrand(t.brandId),
        category: this.getCategory(t.categoryId)
      })), isFinding: false });
      console.log(this.state.products)
    })
  }

  findProductUI() {
    return <div>
      <Form.Group >
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" onChange={this.createChangeEvent('productName')} value={this.state.productName} />
        <button type="submit" onClick={this.handleFindProduct}>Find</button>
      </Form.Group>
    </div>
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={3}>
            <Button onClick={this.createAddProductsFn}>Add more products</Button>
          </Col>
          <Col>{this.addProduct()}</Col>
          <Col sm={3}>
            {this.findProductUI()}
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Brand Name</th>
                  <th>Category Name</th>
                  <th>Price List</th>
                  <th>Model Year</th>
                </tr>
              </thead>
              <tbody>
                {this.state.products.map((x) => this.createProduct(x))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ProductManager