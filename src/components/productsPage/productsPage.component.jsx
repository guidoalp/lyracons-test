import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router-dom";
import ProductList from '../product-list/productList.component.jsx';

function ProductsPage ({items, promo}) {
  
  let category = useParams();
  let filteredItems = items.find((index) => index[0] === category.category );

  let promotedItems;
  if (promo) {
    items.find((category) => 
      promotedItems = category[1].filter((product) => product.promoted === true)
    );
  }
  return (
    <div className="main">
      <Row>
        <Col xs={12}>
          <div className="productList-wrapper">
            <ProductList items={promo && promotedItems ? promotedItems : (filteredItems ? [filteredItems] : items)} promo={promo}/>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ProductsPage;