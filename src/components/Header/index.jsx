import Container, { Nav, SmallContainer } from "./style";
import { BiCart, BiLogInCircle } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const history = useHistory();
  const cart = useSelector((state) => state.cart).length;
  return (
    <Container>
      <SmallContainer>
        <h1 onClick={() => history.push("/")}>Kenzie Shop</h1>
      </SmallContainer>
      <Nav>
        <SmallContainer>
          <div className="icon_count">
            <BiCart></BiCart>
          </div>
          <span onClick={() => history.push("/cart")}>Carrinho</span>
          {cart > 0 && <div className="count">{cart}</div>}
        </SmallContainer>
        <SmallContainer>
          <BiLogInCircle></BiLogInCircle>
          <span>Entrar</span>
        </SmallContainer>
      </Nav>
    </Container>
  );
}
