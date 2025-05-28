import { Counter } from '../Counter/Counter';

export const Restaurant = ({ restaurant }) => {
  return (
    <div className="restaurant">
      <h2>{restaurant.name}</h2>
      
      <h3>Меню</h3>
      <ul className="menu">
        {restaurant.menu.map((dish) => (
          <li key={dish.id}>
            {dish.name} - <Counter />
          </li>
        ))}
      </ul>
      
      <h3>Отзывы</h3>
      <ul className="reviews">
        {restaurant.reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
    </div>
  );
};