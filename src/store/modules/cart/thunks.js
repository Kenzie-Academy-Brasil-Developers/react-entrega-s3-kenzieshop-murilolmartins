import { addCart, removeCart } from "./actions";

export const cartReducerThunk = (product, toast) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("@KCart")) || [];
  const search = list.find((prod) => prod.id === product.id);
  if (search === undefined) {
    product.counter = 1;
    const newList = [...list, product];

    localStorage.setItem("@KCart", JSON.stringify(newList));
    dispatch(addCart(product));
    toast.success("Produto Adicionado");
  } else {
    const index = list.findIndex((product) => product.id === search.id);
    list[index].counter += 1;
    toast.success("Produto Adicionado");
    localStorage.setItem("@KCart", JSON.stringify(list));
    dispatch(addCart(list));
  }
};

export const cartRemoveThunk = (product, toast) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("@KCart")) || [];

  const newList = list.filter((produto) => produto.id !== product.id);
  localStorage.setItem("@KCart", JSON.stringify(newList));
  dispatch(removeCart(product));
  toast.success("Produto Removido");
};
