import { useContext } from "react";
import { ProductContext } from "../App";

const Cart = (props) => {
  const { style: s } = props;
  const { store, dispatch } = useContext(ProductContext);
  const { cart } = store;
  const styleDesc = {
    padding: "5px",
    fontSize: "18px",
    textAlign: "initial",
    display: "block"
  };

  const decreaseCount = (item) => {
    console.log("hello");
    if (item.count === 1) {
      dispatch({
        type: "REMOVE_CART",
        payload: { id: item.id }
      });
    }
    dispatch({
      type: "REDUCE_COUNT",
      payload: { id: item.id }
    });
  };
  const increaseCount = (id) => {
    dispatch({
      type: "INCREASE_COUNT",
      payload: { id }
    });
  };
  return (
    <div style={s}>
      Cart{`(${cart.length ? cart.length : ""})`}
      {cart.length ? (
        <h4 style={{ textAlign: "end" }}>
          Total ${cart.reduce((acc, item) => acc + item.count * item.price, 0)}
        </h4>
      ) : (
        <></>
      )}
      {cart.map((item, index) => {
        return (
          <div
            title={item.title}
            key={index}
            style={{ border: "2px solid black", padding: "10px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <img
                src={item.thumbnail}
                width="50"
                height="50"
                alt={item.title}
              />
              <div style={styleDesc}>{item.title}</div>
              <span
                style={{
                  fontSize: "16px",
                  color: "gray",
                  textAlign: "initial"
                }}
              >
                ${item.price * item.count}
              </span>
            </div>
            <button
              onClick={() => {
                increaseCount(item.id);
              }}
              style={{ marginRight: "5px" }}
            >
              +
            </button>
            {item.count}
            <button
              onClick={(e) => {
                decreaseCount(item);
              }}
              style={{ marginLeft: "5px" }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
