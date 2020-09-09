import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { add, remove } from 'cart-localstorage';

import './product.styles.scss';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reload: false
    }
  }

  agregarProducto = e => {
    const product = {
      id: e.target.closest('.card').getAttribute('data-sku'), 
      name: e.target.closest('.card').getAttribute('data-name'), 
      price: e.target.closest('.card').getAttribute('data-price')
    };
  
    add(product, 1);
  };
  
  eliminarProducto = e => {
    const product = {
      id: e.target.closest('.card').getAttribute('data-sku'), 
    };
    remove(product.id, 1);
    this.setState({'reload' : true} );
  }

  render() {
    const {Product, cart} = this.props;
    return (
      <Card key={Product.sku} data-sku={Product.id ? Product.id : Product.sku} data-name={Product.name} data-price={Product.price} className="product mb-4 w-100">
        <Card.Img variant="top" src="https://via.placeholder.com/300x300" />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="name">{Product.name}</Card.Title>
          <div className="card-text mb-3 flex-grow-1">
            <div className="price">{Product.price}</div>
            <div className="description mb-2">{Product.description}</div>
          </div>
          <div className="buttons d-flex">
            <Button className="w-100" onClick={cart ? this.eliminarProducto : this.agregarProducto}>{cart ? 'Eliminar' : 'Agregar'}</Button>
          </div>
        </Card.Body>
      </Card>
    )
  }
}

export default Product;