import CardProduct from "../../components/CardProduct";
import Header from "../../components/Header";
import { Container, SmallContainer } from "./style";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { productsReducerThunk } from "../../store/modules/products/thunks";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsReducerThunk());
  }, [dispatch]);
  const products = useSelector((state) => state.products);
  return (
    <>
      <Header></Header>
      <Container>
        <SmallContainer>
          {products.map((product) => (
            <CardProduct
              product={product}
              key={product.id}
              isProduct={true}
            ></CardProduct>
          ))}
        </SmallContainer>
      </Container>
    </>
  );
}
