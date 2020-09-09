import React from 'react';
import Product from '../product/product.component';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProductList ({items, promo, cart}) {
  if (promo || cart) {
    return (
      <div className="product-list">
        <Row className="justify-content-center">
          {items.map((product) => (
            <Col key={product.sku} xs={12} sm={6} md={4} className="d-flex px-md-2">
              <Product Product={product} cart/>
            </Col>
          ))}
        </Row>
      </div>
    )
  } else {
    return (
      <div className="product-list">
        {items.map((categories) => (
          <div key={categories[0]} className="category">
            <Row className="justify-content-center">
              {categories[1].map((product, key) => (
                <Col key={key} xs={12} sm={6} md={4} className="d-flex px-md-2">
                  <Product key={product.sku} Product={product} />
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </div>
    )
  }
}

export default ProductList;