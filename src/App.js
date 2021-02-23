import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardColumns } from 'react-bootstrap';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import XboxOne from './Views/XboxOne';
import NintendoSwitch from './Views/NintendoSwitch';
import Playstation5 from './Views/Playstation5';
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
  return (
    <div className="App">
      <Router>
        <NavBar
        />
        <Card.Body>
          <CardColumns>
            <Route path="/product/:id" component={ProductDetails} onAdd={onAdd} products={products} />
            <Route path="/" exact={true} component={Product} onAdd={onAdd} />
            <Route path='/cart/:id?'>
              <Cart onAdd={onAdd} cartItems={cartItems}></Cart>
            </Route>
            <Route path="/xboxone">
              <XboxOne />
            </Route>
            <Route path="/nintendoswitch">
              <NintendoSwitch />
            </Route>
            <Route path="/playstation5">
              <Playstation5 />
            </Route>
          </CardColumns>
        </Card.Body>
        <Footer />
      </Router>
    </div>


  );
}
export default App;
