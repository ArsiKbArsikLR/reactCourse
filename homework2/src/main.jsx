import { createRoot } from 'react-dom/client';
import React from 'react';
import { restaurants } from '../materials/mock.js';

const root = createRoot(document.getElementById('root'));

root.render(
  <div className="restaurants">
    {restaurants.map((restaurant) => (
      <div key={restaurant.id} className="restaurant">
        <h2>{restaurant.name}</h2>

        <h3>Меню</h3>
        <ul className="menu">
          {restaurant.menu.map((dish) => (
            <li key={dish.id}>{dish.name}</li>
          ))}
        </ul>

        <h3>Отзывы</h3>
        <ul className="reviews">
          {restaurant.reviews.map((review) => (
            <li key={review.id}>{review.text}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
