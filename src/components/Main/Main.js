import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import Random from '../Random/Random';
import './Main.css';

const Main = () => {
    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState([]);
    const [rand, setRand] = useState([]);
    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, []);

    const addToCart = food => {
        const newFood = [...cart, food];
        setCart(newFood);
    }

    const chooseAgain = () => {
        setCart([]);
    }
    const choose1ForMe = () => {
        const randFood = cart[Math.floor(Math.random() * cart.length)];
        setRand(randFood);
    }
    return (
        <div className='foods-container-row'>
            <div className='left-side-column'>
                <div className='foods'>
                    {
                        foods.map(food => <Food
                            key={food.id}
                            food={food}
                            addToCart={addToCart}
                            choose1ForMe
                        ></Food>)
                    }
                </div>
            </div>
            <div className='right-side-column'>
                <h1>Selected Food</h1>
                {
                    cart.map(food => <Cart key={food.id} food={food}></Cart>)
                }
                <Random random={rand}></Random>
                <button className="choose-button button1" onClick={choose1ForMe}>Choose one for me!</button>
                <button className="choose-button button2" onClick={chooseAgain}>Choose Again</button>
            </div>
        </div>
    );
};

export default Main;