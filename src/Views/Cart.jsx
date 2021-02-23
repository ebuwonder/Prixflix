import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button } from 'react-bootstrap';

function Cart(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);
    const taxPrice = itemsPrice * 0.10;
    const shippingPrice = itemsPrice > 100 ? 0 : 15;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
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
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className="row">
                        <div className="col-2">Items Price</div>
                        <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Tax Price</div>
                        <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Shipping Price</div>
                        <div className="col-1 text-right">
                            ${shippingPrice.toFixed(2)}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-2">
                            <strong>Total Price</strong>
                        </div>
                        <div className="col-1 text-right">
                            <strong>${totalPrice.toFixed(2)}</strong>
                        </div>
                    </div>

                </>
            )}
        </Card>
    );
}

export default Cart;