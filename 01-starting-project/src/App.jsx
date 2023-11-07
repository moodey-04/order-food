import { useState } from "react";
import Header from "./components/header/header";
import Meals from "./components/meals/meals";
import CartProvider from "./components/store/cartProvider";
import Cart from "./components/cart/cart";
import Modal from "./components/modal";
import CartForm from "./components/cart/cartForm";

function App() {
  const [isShowCart, setIsShowCart] = useState(false);
  const [isShowCartForm, setIsShowCartForm] = useState(false);

  return (
    <CartProvider>
      <Modal open={isShowCart}>
        <Cart
          onClose={() => setIsShowCart(false)}
          onShowCartForm={() => setIsShowCartForm(true)}
        />
      </Modal>
      <Modal open={isShowCartForm}>
        <CartForm onClose={() => setIsShowCartForm(false)} />
      </Modal>
      <Header onShowCart={() => setIsShowCart(true)} />
      <Meals />
    </CartProvider>
  );
}

export default App;
