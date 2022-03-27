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

    const choseAgain = () => {
        setCart([]);
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
                <h1>Selected Food</h1>
                {
                    cart.map(food => <Cart key={food.id} food={food}></Cart>)
                }
                <button class="choose-button button1">Choose one for me!</button>
                <button class="choose-button button2" onClick={choseAgain}>Choose Again</button>
            </div>
        </div>
    );
};

export default Main;