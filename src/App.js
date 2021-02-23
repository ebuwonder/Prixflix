import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardColumns } from 'react-bootstrap';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Product from './Views/Product';
import ProductDetails from "./Views/ProductDetails";
import Cart from "./Views/Cart";
import data from "./data";


function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x)
      );
    }
  };
  return (
    <div className="App">
      <Router>
        <NavBar countCartItems={cartItems.length}></NavBar>
        <Card.Body>
          <CardColumns>
            <Route path="/product/:id" component={ProductDetails} onAdd={onAdd} products={products}>
            </Route>
            <Route path="/" exact={true} component={Product} >
              <Product onAdd={onAdd} />
            </Route>
            <Route path='/cart/:id?'>
              <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Cart>
            </Route>
          </CardColumns>
        </Card.Body>
        <Footer />
      </Router>
    </div>


  );
}
export default App;
