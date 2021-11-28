import api from "../../../services/api";
import loadProducts from "./actions";

export const productsReducerThunk = () => (dispatch) => {
  api
    .get("/products")
    .then((response) => {
      dispatch(loadProducts(response.data));
    })
    .catch((err) => console.log(err));
};
