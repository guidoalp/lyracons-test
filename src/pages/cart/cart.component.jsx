import React, { Component } from 'react';
import { list } from 'cart-localstorage';
import ProductList from '../../components/product-list/productList.component.jsx';

import './cart.styles.scss';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "myCart" : []
    }
  }

  componentDidMount() {
    this.setState({ "myCart" : list() })
  }

  updateCart = e => {
    this.setState({ "myCart" : list() });
  }

  render () {
    return (
      <div className="myCart">
        <h1 className="section-title">Mi carrito</h1>
        { list().length ? <ProductList items={ list() } cart onChange={this.updateCart.bind(this)} /> : <p className="text-secondary">Parece que su carrito aún está vacío!</p> }
      </div>
    )
  }
}

export default Cart;