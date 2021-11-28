import { ADD_CART } from "./actionTypes";

export const addCart = (product) => ({
  type: ADD_CART,
  product,
});
