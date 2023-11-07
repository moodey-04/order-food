import { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import InputFormCart from "./inputFormCart";
import { updateOrder } from "../../https";

const CartForm = (props) => {
  const cartCtx = useContext(CartContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    try {
      const resData = await updateOrder(
        JSON.stringify({
          order: {
            items: cartCtx.items,
            customer: customerData,
          },
        })
      );

      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setInform({
      name: "",
      email: "",
      street: "",
      postal: "",
      city: "",
    });

    props.onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <p>Total Amount: ${cartCtx.totalAmount}</p>
      <div>
        <InputFormCart title={"Full Name"} id={"name"} name="name" />
        <InputFormCart title={"E-mail Address"} name="email" id="name" />
        <InputFormCart title={"Street"} name="street" id="street" />
        <div className="control-row">
          <InputFormCart title={"Postal Code"} name="postal" id="postal" />
          <InputFormCart title={"City"} name="city" />
        </div>
      </div>
      <div className="modal-actions">
        <button
          className="text-button"
          type={"button"}
          onClick={() => handleClose()}
        >
          Close
        </button>
        <button className="button" type={"submit"}>
          Go to Checkout
        </button>
      </div>
    </form>
  );
};

export default CartForm;
