import React from 'react';
import { list } from 'cart-localstorage';
import ProductList from '../product-list/productList.component.jsx';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cart = () => (
  <div className="myCart"> 
    <Row>
      <Col xs={12}>
        <div className="myCart-wrapper">
          <ProductList items={ list() } cart />
        </div>
      </Col>
    </Row>
  </div>
);

export default Cart;