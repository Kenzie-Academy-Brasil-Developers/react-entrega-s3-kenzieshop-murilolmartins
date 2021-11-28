// import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Carrinho from "../pages/Carrinho";
import Home from "../pages/Home";
// import { productsReducerThunk } from "../store/modules/products/thunks";
export default function Routes() {
  // const dispatch = useDispatch();
  // dispatch(productsReducerThunk());

  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/cart" component={Carrinho}></Route>
    </Switch>
  );
}
