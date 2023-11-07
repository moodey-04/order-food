const OrderSuccess = (props) => {
  return (
    <div>
      <h2>Success!</h2>
      <p>Your order was submitted successfully</p>
      <p>
        We will get back to you with more details via email within the next few
        minutes
      </p>
      <div className="modal-actions">
        <button className="button" onClick={() => props.onClose()}>
          Okay
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
