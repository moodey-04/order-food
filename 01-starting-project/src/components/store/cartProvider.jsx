import { useState } from "react";
import CartContext from "./cart-context";
const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleAddToCart = (item) => {
    const existingCartItemIndex = cart.findIndex((x) => x.id === item.id);
    const existingCartItem = cart[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + item.amount,
      };

      updatedItems = cart;
      updatedItems[existingCartItemIndex] = updatedItem;
    } else updatedItems = [...cart, item];

    setTotalAmount(totalAmount + item.price * item.amount);
    setCart(updatedItems);
  };

  const handleRemoveFromCart = (id) => {
    const existingCartItemIndex = cart.findIndex((x) => x.id === id);
    const existingCartItem = cart[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem.amount > 1) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };

      updatedItems = cart;
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = cart.filter((x) => x.id !== id);
    }

    setTotalAmount(totalAmount - existingCartItem.price);
    setCart(updatedItems);
  };

  const cartContext = {
    items: cart,
    totalAmount: totalAmount,
    addItem: handleAddToCart,
    removeItem: handleRemoveFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
