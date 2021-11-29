import { useDispatch, useSelector } from "react-redux";
import { RemoveCart } from "../../store/modules/cart/actions";
import Container from "./styles";

export default function CardTotal() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Container>
      <div>
        <h2>Resumo do pedido</h2>
      </div>
      <div>
        <p>{cart.length} Produtos</p>
        <p>
          R$ {cart.reduce((qtd, product) => qtd + product.price, 0).toFixed(2)}
        </p>
      </div>
      <button
        onClick={() => {
          dispatch(RemoveCart());
        }}
      >
        FINALIZAR O PEDIDO
      </button>
    </Container>
  );
}
