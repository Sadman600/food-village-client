import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';
const Cart = props => {
    const { image, name } = props.food;

    return (
        <div className='cart'>
            <img src={image} alt={name} style={{ width: '70px ' }}></img>
            <h4>{name}</h4>
            <button>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Cart;