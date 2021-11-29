import { ADD_CART } from "./actionTypes";

export const addCart = (product) => ({
  type: ADD_CART,
  product,
});

export const RemoveCart = () => ({
  type: "@REMOVE",
});

export const removeCart = (product) => ({
  type: "@REMOVE_ITEM",
  product,
});
