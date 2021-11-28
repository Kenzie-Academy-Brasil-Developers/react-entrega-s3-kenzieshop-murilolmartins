import { addCart } from "./actions";

export const cartReducerThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("@KCart")) || [];

  const newList = [...list, product];

  localStorage.setItem("@KCart", JSON.stringify(newList));
  dispatch(addCart(product));
};
