import { useDispatch } from "react-redux";
import {
  cartReducerThunk,
  cartRemoveThunk,
} from "../../store/modules/cart/thunks";
import Container from "./style";
import { toast } from "react-toastify";

export default function CardProduct({ product, isProduct }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <div className="image">
        <img src={product.image} alt="" />
      </div>
      <div className="description">
        <p className="title">{product.title}</p>
        <p className="price">R$ {product.price?.toFixed(2)}</p>
      </div>
      {isProduct ? (
        <button onClick={() => dispatch(cartReducerThunk(product, toast))}>
          Adiciona ao Carrinho
        </button>
      ) : (
        <>
          <button onClick={() => dispatch(cartRemoveThunk(product, toast))}>
            Remover do Carrinho
          </button>
          <div className="count">{product.counter}</div>
        </>
      )}
    </Container>
  );
}
