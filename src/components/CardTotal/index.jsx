import { useSelector } from "react-redux";
import Container from "./styles";

export default function CardTotal() {
  const cart = useSelector((state) => state.cart);

  return (
    <Container>
      <div>
        <h2>Resumo do pedido</h2>
      </div>
      <div>
        <p>{cart.length} Produtos</p>
        <p>R$ {cart.reduce((qtd, product) => qtd + product.price, 0)}</p>
      </div>
      <button>FINALIZAR O PEDIDO</button>
    </Container>
  );
}
