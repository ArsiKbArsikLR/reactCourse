import React, { useState } from 'react';
import { restaurants } from '../../../materials/mock.js';
import { Layout } from '../../layouts/MainLayout';

export const App = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  return (
    <Layout>
      <div className="restaurant-tabs">
        {restaurants.map((restaurant, index) => (
          <button
            key={restaurant.id}
            className={index === activeRestaurantIndex ? 'active' : ''}
            onClick={() => setActiveRestaurantIndex(index)}
          >
            {restaurant.name}
          </button>
        ))}
      </div>

      <div className="restaurant">
        <h2>{restaurants[activeRestaurantIndex].name}</h2>

        <h3>Меню</h3>
        <ul className="menu">
          {restaurants[activeRestaurantIndex].menu.map((dish) => (
            <DishItem key={dish.id} dish={dish} />
          ))}
        </ul>

        <h3>Отзывы</h3>
        <ul className="reviews">
          {restaurants[activeRestaurantIndex].reviews.map((review) => (
            <li key={review.id}>{review.text}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

const DishItem = ({ dish }) => {
  const [count, setCount] = useState(0);

  return (
    <li>
      {dish.name}
      <div className="counter">
        <button
          onClick={() => setCount((c) => Math.max(0, c - 1))}
          disabled={count === 0}
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={() => setCount((c) => Math.min(5, c + 1))}
          disabled={count === 5}
        >
          +
        </button>
      </div>
    </li>
  );
};
