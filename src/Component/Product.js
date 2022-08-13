import Card from "./Card";
import { useContext } from "react";
import { ProductContext } from "../App";

const Product = (props) => {
  const { store } = useContext(ProductContext);
  const { style: s } = props;
  return (
    <div style={s}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly"
        }}
      >
        {store.products.map((item) => {
          return (
            <div>
              <Card item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Product;
