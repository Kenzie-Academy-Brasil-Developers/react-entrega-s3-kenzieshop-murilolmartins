import Container from "./style";
import CardProduct from "../../components/CardProduct";
import Header from "../../components/Header";
import CardTotal from "../../components/CardTotal";
import SmallContainer from "./style";
import { useSelector } from "react-redux";

export default function Carrinho() {
  const carrinho = useSelector((state) => state.cart);
  return (
    <>
      <Header></Header>
      <Container>
        <SmallContainer>
          {carrinho.map((product) => (
            <CardProduct
              product={product}
              isProduct={false}
              key={product.id}
            ></CardProduct>
          ))}
        </SmallContainer>
        <CardTotal></CardTotal>
      </Container>
    </>
  );
}
