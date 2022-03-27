import React from 'react';
import './Cart.css';
const Cart = props => {
    console.log(props.food);
    return (
        <div>


            <h1>{props.food.name}</h1>
        </div>
    );
};

export default Cart;