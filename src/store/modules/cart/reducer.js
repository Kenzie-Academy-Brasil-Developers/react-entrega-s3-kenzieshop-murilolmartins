import { ADD_CART } from "./actionTypes";

const cart = JSON.parse(localStorage.getItem("@KCart")) || [];

const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      return [...state, product];
    default:
      return state;
  }
};

export default cartReducer;
