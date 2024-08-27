const RestaurantCard = ({ resData }) => {
  const {
    name,
    characteristics,
    rating,
    minimum_delivery_time,
    hero_listing_image,
  } = resData;

  return (
    <div className="restaurant-card">
      <img alt="restaurant-logo" src={hero_listing_image} />
      <div className="card-bottom">
        <h4 className="restaurant-name">{name}</h4>
        <p className="restaurant-cuisine">
          Cuisine: {characteristics.primary_cuisine?.name || "---"}
        </p>
        <h5 className="restaurant-rating">Rating: {rating} Stars</h5>
        <h5 className="restaurant-">{minimum_delivery_time} minutes</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
