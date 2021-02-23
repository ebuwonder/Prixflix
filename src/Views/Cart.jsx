import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button } from 'react-bootstrap';

function Cart(props) {
    const { cartItems, onAdd, onRemove } = props;

    return (


        <Card className="text-left" style={{ width: '85rem' }}>

            <Card.Header>
                <div>
                    {cartItems.length === 0 && <div>Cart is empty
            </div>}
                </div></Card.Header>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={() => onAdd(item)} className="add">+</button>
                        <button onClick={() => onRemove(item)} className="remove">-</button>
                    </div>
                    <div className="col-2" text-right>
                        {item.quantity} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}

        </Card>
    );
}

export default Cart;