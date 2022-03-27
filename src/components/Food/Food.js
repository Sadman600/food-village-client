import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Food.css';
const Food = props => {
    const { addToCart, food } = props;
    const { image, name, price } = food;
    return (
        <div className='food'>
            <img src={image} alt='' ></img>
            <div className='product-info'>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
            </div>
            <button className='button' onClick={() => addToCart(props.food)} >
                <span>Add to cart</span>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Food;