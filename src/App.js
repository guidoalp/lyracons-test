import './scss/App.scss';

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import Products from './pages/products/products.component.jsx';
import Cart from './pages/cart/cart.component.jsx';
import Nosotros from './pages/nosotros/nosotros.component.jsx';

import Navigation from './components/navigation/navigation.component.jsx';
import Breadcrumb from './components/breadcrumb/breadcrumb.component.jsx';

class App extends Component {
  constructor () {
    super();

    this.state = {
      "items" : [],
      "categories": [],
      "extraMenuItems" : []
    }
  }

  componentDidMount() {
    fetch("http://ec2-3-88-32-16.compute-1.amazonaws.com/challenge/products/")
    .then((response) => response.json())
    .then((products) => this.setState({ 'items' : Object.entries(products), 'categories': Object.keys(products) }));

    fetch("http://ec2-3-88-32-16.compute-1.amazonaws.com/challenge/additional/")
    .then((response) => response.json())
    .then((extraMenuItems) => this.setState({ extraMenuItems }));
  }

  render() {
    return (
      <Router>
        <Container className="text-center text-md-left">
          <Link to="/">
            <Image src={process.env.PUBLIC_URL + '/assets/logo.png'} className="img-fluid mw my-3 logo"/>
          </Link>
        </Container>
        <Navigation categories={this.state.categories} extraMenuItems={this.state.extraMenuItems}/>
        <Breadcrumb />
        <Container>
          <Switch>
            <Route exact={true} path="/">
              <h1 className="section-title">Inicio</h1>
            </Route>
            <Route path="/productos/:category?">
              <Products items={this.state.items} />
            </Route>
            <Route path="/nosotros">
              <Nosotros />
            </Route>
            <Route path="/promotions">
              <Products items={this.state.items} promo />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;