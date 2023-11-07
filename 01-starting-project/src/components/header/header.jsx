import "../../index.css";
import logo from "../../assets/logo.jpg";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const handleCart = () => {
    props.onShowCart(true);
  };

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div id="main-header">
      <h1 id="title">
        <img src={logo} /> React FoodOrder
      </h1>
      <button className="text-button" onClick={handleCart}>
        Cart ({numberOfCartItems})
      </button>
    </div>
  );
};

export default Header;
