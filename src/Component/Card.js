import { useContext } from "react";
import { ProductContext } from "../App";

const Product = (props) => {
  const { store, dispatch } = useContext(ProductContext);

  const { cart } = store;
  const { thumbnail, title, price } = props.item;
  const styleDesc = {
    padding: "5px",
    fontSize: "18px",
    textAlign: "initial",
    display: "block"
  };
  const AddtoCart = (item) => {
    const cart = { ...item, count: 1 };
    dispatch({
      type: "ADD_CART",
      payload: { ...cart }
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_CART",
      payload: { id }
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid black",
        margin: "5px 0px",
        padding: "5px"
      }}
    >
      <img src={thumbnail} alt={title} width="250" height="250" />
      <div style={styleDesc}>{title}</div>
      <span style={{ fontSize: "16px", color: "gray", textAlign: "initial" }}>
        ${price}
      </span>
      {cart.find((c) => c.id === props.item.id) ? (
        <button onClick={() => removeFromCart(props.item.id)}>
          Remove from Cart
        </button>
      ) : (
        <button onClick={(e) => AddtoCart(props.item)}>Add to Cart</button>
      )}
    </div>
  );
};
export default Product;
