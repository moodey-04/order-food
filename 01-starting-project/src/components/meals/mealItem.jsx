import { useState, useContext } from "react";
import "../../index.css";
import CartContext from "../store/cart-context";

const MealItem = (props) => {
  const [meal] = useState(props.item);
  const cartCtx = useContext(CartContext);

  const handleAddToCart = () => {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      amount: 1,
      price: meal.price,
    });
  };

  return (
    <div className="meal-item">
      <img src={"../../../backend/public/" + meal.image} />
      <h3>{meal.name}</h3>
      <div className="meal-item-price">${meal.price}</div>
      <div className="meal-item-description">{meal.description}</div>
      <div className="meal-item-actions">
        <button className="button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MealItem;
