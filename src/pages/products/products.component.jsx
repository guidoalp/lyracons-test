import React from 'react';
import { useParams } from "react-router-dom";
import ProductList from '../../components/product-list/productList.component.jsx';

import './products.styles.css';

function Products ({items, promo}) {
  
  let category = useParams();
  let filteredItems = items.find((index) => index[0] === category.category );

  let promotedItems;
  if (promo) {
    items.find((category) => 
      promotedItems = category[1].filter((product) => product.promoted === true)
    );
  }
  return (
    <div className="products">
      <ProductList items={promo && promotedItems ? promotedItems : (filteredItems ? [filteredItems] : items)} promo={promo}/>
    </div>
  )
}

export default Products;