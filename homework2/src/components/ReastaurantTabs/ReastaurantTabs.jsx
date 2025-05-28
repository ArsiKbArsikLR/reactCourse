export const RestaurantTabs = ({ restaurants, activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      {restaurants.map((restaurant, index) => (
        <button
          key={restaurant.id}
          className={index === activeTab ? 'active' : ''}
          onClick={() => setActiveTab(index)}
          disabled={index === activeTab}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
};