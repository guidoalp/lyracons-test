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

import Navigation from './components/navigation/navigation.component.jsx';
import ProductsPage from './components/productsPage/productsPage.component.jsx';
import Breadcrumb from './components/breadcrumb/breadcrumb.component.jsx';
import Cart from './components/cart/cart.component.jsx';

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
              <ProductsPage items={this.state.items} />
            </Route>
            <Route path="/nosotros">
              <h1 className="section-title">Nosotros</h1>
              <div className="text-secondary mb-5">
              <p class="">Lyracons is an Argentinian software development company focused on eCommerce solutions with Magento & VTEX. We have vast expertise in complex, large-scale, B2C and B2B projects with CRM, ERP, Payment Gateways and OMS integrations.</p>
              <p class="">Lyracons provide full-service development, turn-key projects & off-shore elastics teams for Latin America & US market.</p>
              <p class="">We are the first and only New Relic partner & reseller in Argentina.</p>
              </div>
              <h2 className="section-title">Nuestras Redes</h2>
              { /* TODO: Agregar iconos de redes */ }
            </Route>
            <Route path="/promotions">
              <ProductsPage items={this.state.items} promo />
            </Route>
            <Route path="/cart">
              <h1 className="section-title">Mi carrito</h1>
              <Cart />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;