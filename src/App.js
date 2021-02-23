import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardColumns } from 'react-bootstrap';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import XboxOne from './Views/XboxOne';
import NintendoSwitch from './Views/NintendoSwitch';
import Playstation5 from './Views/Playstation5';
import Product from './Views/Product';
import ProductDetails from "./Views/ProductDetails";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Card.Body>
          <CardColumns>
            <Route path="/product/:id" component={ProductDetails} />
            <Route path="/" exact={true} component={Product} />
            <Route path="/cart">
              <Cart />
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
