import React from "react";
import { Container, Button, Card, Form, Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from "../data";


function ProductDetails(props) {
    const [quantity, setQuantity] = useState(1);
    const product = data.products.find((x) => x.id === props.match.params.id);
    const handleAddToCart = () => {
        props.history.push('/cart/' + props.match.params.id + '?quantity=' + quantity);
    };
    return (

        <Container fluid>
            <Card style={{ width: '26rem' }}>
                <Card.Img variant="top" src={product.image} alt={product.name} />
            </Card>

            <Card style={{ width: '50rem' }}>
                <Link to=''><Card.Header>{product.category}</Card.Header></Link>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Title>${product.price}</Card.Title>
                    <Card.Text>{product.manufacturer}</Card.Text>
                    <Card.Text>{product.serNum}</Card.Text>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>
                        Status:{' '}
                        {product.inStock > 0 ? 'In Stock' : 'Unavailable.'}
                    </Card.Text>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            Quantity:{' '}
                            <Form.Control as="select"
                                value={quantity}
                                onChange={(e) => {
                                    setQuantity(e.target.value);
                                }}
                            >
                                {[...Array(product.inStock).keys()].map((x) => (
                                    <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </option>
                                ))}
                            </Form.Control>

                        </Form.Group>
                    </Form>
                    {product.inStock > 0 ? <Button variant="info" size="sm" onClick={handleAddToCart} type="submit" >
                        Add to Cart</Button> : <div>Out of Stock</div>}

                </Card.Body>
            </Card>
        </Container>
    );
}
export default ProductDetails;
