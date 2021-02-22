import React from "react";
import { Container, Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from "../data";
import Product from '../Components/Product';


function ProductDetails() {


    return (

        <Container fluid>
            <Card style={{ width: '26rem' }}>
                <Card.Img variant="top" src={data.image} alt={data.name} />
            </Card>

            <Card style={{ width: '50rem' }}>
                <Card.Header>{data.category}</Card.Header>
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{data.manufacturer}</Card.Text>
                    <Card.Text>{data.serNum}</Card.Text>
                    <Card.Text>{data.description}</Card.Text>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>CartQuantity</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <Link to='/cart'><Button variant="info" size="sm" type="submit" >
                        Add to Cart</Button></Link>
                </Card.Body>
            </Card>
        </Container>
    );
}
export default ProductDetails; 