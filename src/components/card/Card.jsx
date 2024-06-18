import React from "react";
import "./Card.css";

const Card = ({ image, price, title, location, rating, description }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={image} alt={title} />
        <div className="price">${price}</div>
      </div>
      <label className="favorite">
        <input defaultChecked type="checkbox" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#000000"
        >
          <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z" />
        </svg>
      </label>
      <div className="content">
        <div className="brand">{location}</div>
        <div className="product-name">{title}</div>
        <div className="rating">{rating}</div>
      </div>
      <div className="button-container">
        <button className="buy-button button">Check Out</button>
      </div>
    </div>
  );
};

export default Card;
