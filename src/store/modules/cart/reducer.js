import { ADD_CART } from "./actionTypes";

const cart = JSON.parse(localStorage.getItem("@KCart")) || [];

const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      if (Array.isArray(product)) {
        return product;
      } else {
        return [...state, product];
      }
    case "@REMOVE":
      localStorage.clear();
      return cart;
    case "@REMOVE_ITEM":
      const newCart = state.filter((produto) => produto !== action.product);
      return newCart;
    default:
      return state;
  }
};

export default cartReducer;
