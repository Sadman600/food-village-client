import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Main.css';

const Main = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, []);
    return (
        <div className='foods-container-row'>
            <div className='left-side-column'>
                <div className='foods'>
                    {
                        foods.map(food => <Food key={food.id} food={food}></Food>)
                    }
                </div>
            </div>
            <div className='right-side-column'>gg</div>
        </div>
    );
};

export default Main;