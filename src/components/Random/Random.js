
import React from 'react';
import './Random.css';
const Random = props => {
    const { image, name } = props.random;
    return (
        <div className='random'>
            <img src={image} alt={name} style={{ width: '70px ' }}></img>
            <h4>{name}</h4>
        </div>
    );
};

export default Random;