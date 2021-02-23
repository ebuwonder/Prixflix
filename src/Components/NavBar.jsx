import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Cart3 } from 'react-bootstrap-icons';



function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Link to='/'><Navbar.Brand>PrixFlix</Navbar.Brand></Link>
            <Nav className="mr-auto">
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                    <NavDropdown.Item ><Link to="/category/playstation5">Playstation 5</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/category/xboxone">XboxOne</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/category/nintendoswitch">Nintendo Switch</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link><Link to="/cart"><span class="badge badge-light"><Cart3 />9</span></Link></Nav.Link>
            </Nav>


            <div>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </div>


        </Navbar>


    )
}

export default NavBar;



