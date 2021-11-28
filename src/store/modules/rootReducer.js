import { combineReducers } from "redux";
import cartReducer from "./cart/reducer";
import productsReducer from "./products/reducer";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default reducers;
