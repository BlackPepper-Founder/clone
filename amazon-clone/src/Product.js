import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="Product">
      <img src={image} alt="" />
      <div className="Product_info">
        <p>{title}</p>
        <p className="Product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="Product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
