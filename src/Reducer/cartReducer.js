export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_CART":
      return {
        ...state,
        cart: [...state.cart.filter((c) => c.id !== action.payload.id)]
      };
    case "INCREASE_COUNT":
      return {
        ...state,
        cart: [
          ...state.cart.map((c) => {
            if (c.id === action.payload.id) {
              return { ...c, count: c.count + 1 };
            }
            return c;
          })
        ]
      };
    case "REDUCE_COUNT":
      return {
        ...state,
        cart: [
          ...state.cart.map((c) => {
            if (c.id === action.payload.id) {
              return { ...c, count: c.count - 1 };
            }
            return c;
          })
        ]
      };
    default:
      return state;
  }
};
