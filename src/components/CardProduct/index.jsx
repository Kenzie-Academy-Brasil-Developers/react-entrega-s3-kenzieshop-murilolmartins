import { useDispatch } from "react-redux";
import { cartReducerThunk } from "../../store/modules/cart/thunks";
import Container from "./style";

export default function CardProduct({ product, isProduct }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <div className="image">
        <img src={product.image} alt="" />
      </div>
      <div className="description">
        <p className="title">{product.title}</p>
        <p className="price">R$ {product.price.toFixed(2)}</p>
      </div>
      {isProduct && (
        <button onClick={() => dispatch(cartReducerThunk(product))}>
          Adiciona ao Carrinho
        </button>
      )}
    </Container>
  );
}
