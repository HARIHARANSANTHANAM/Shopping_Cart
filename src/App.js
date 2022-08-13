import "./styles.css";
import { createContext, useEffect, useReducer } from "react";
import { Cart, Product } from "./Component";
import { cartReducer } from "./Reducer/cartReducer";

export const ProductContext = createContext();

export default function App() {
  const [store, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: []
  });
  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products");
      const jsondata = await data.json();
      dispatch({
        type: "ADD_PRODUCTS",
        payload: jsondata.products
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
    console.count("called");
  }, []);

  return (
    <ProductContext.Provider value={{ dispatch: dispatch, store: store }}>
      <div className="App">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-around"
          }}
        >
          <Product style={{ flex: ".8" }} />
          <div style={{ flex: 0.2, position: "relative" }}>
            <Cart style={{ flex: ".2", position: "fixed" }} />
          </div>
        </div>
      </div>
    </ProductContext.Provider>
  );
}
