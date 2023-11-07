const InputFormCart = (props) => {
  return (
    <div className="control">
      <label htmlFor={props.id}>{props.title}</label>
      <input {...props} required />
    </div>
  );
};

export default InputFormCart;
