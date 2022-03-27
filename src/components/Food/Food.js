import React from 'react';
import './Food.css';
const Food = props => {
    const { image, name, price } = props.food;
    return (
        <div className='food'>
            <img src={image} alt='' ></img>
            <div className='product-info'>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
            </div>
        </div>
    );
};

export default Food;