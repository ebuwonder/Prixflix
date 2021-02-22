import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import data from "../data";
import '../App.css';





function Product() {
    return (
        <Container fluid>

            {data.products.map((product) => (<Card style={{ width: '18rem' }}>
                <Link to={'/product/' + product.id}><Card.Img variant="top" src={product.image} alt={product.name} /></Link>
                <Card.Body>
                    <Card.Title><Link to={'/product/' + product.id}>{product.name}</Link></Card.Title>

                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><Link >{product.category}</Link></ListGroupItem>
                    <ListGroupItem>${product.price}</ListGroupItem>
                </ListGroup>
                <Card.Body>

                    <Link to={'/Cart/' + product.id}><Button variant="info" size="sm" type="submit" >
                        Add to Cart</Button></Link>
                </Card.Body>
            </Card>))};

        </Container >


    );
}

export default Product;

