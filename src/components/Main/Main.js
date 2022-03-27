import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Main.css';

const Main = () => {
    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, []);

    const addToCart = food => {
        const newFood = [...cart, food];
        setCart(newFood);
    }
    return (
        <div className='foods-container-row'>
            <div className='left-side-column'>
                <div className='foods'>
                    {
                        foods.map(food => <Food key={food.id} food={food} addToCart={addToCart}></Food>)
                    }
                </div>
            </div>
            <div className='right-side-column'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Main;