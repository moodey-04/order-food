import { useContext } from "react";
import CartContext from "../store/cart-context";
import "../../index.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const handleAddToCart = (meal) => {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      amount: 1,
      price: meal.price,
    });
  };

  const handleRemoveFromCart = (mealId) => {
    cartCtx.removeItem(mealId);
  };

  const handleCheckout = () => {
    if (cartCtx.items.length < 1) return;
    props.onClose();
    props.onShowCartForm();
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((meal, index) => {
          return (
            <li key={index} className="cart-item">
              <p>
                {meal.name} - {meal.amount} x $
                {(meal.amount * meal.price).toFixed(2)}
              </p>
              <div className="cart-item-actions">
                <button onClick={() => handleRemoveFromCart(meal.id)}>-</button>
                {meal.amount}
                <button onClick={() => handleAddToCart(meal)}>+</button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="cart-total">${cartCtx.totalAmount.toFixed(2)}</div>
      <div className="modal-actions">
        <button className="text-button" onClick={() => props.onClose()}>
          Close
        </button>
        <button className="button" onClick={handleCheckout}>
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
