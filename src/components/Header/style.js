import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightgray;
  border-radius: 5px;
  box-shadow: 3px 5px 10px black;
`;

export const SmallContainer = styled.div`
  display: flex;
  padding: 15px;
  position: relative;
  span {
    cursor: pointer;
  }
  h1 {
    margin: 0px;
    cursor: pointer;
  }
  .count {
      position: absolute;
      background-color: blue;
      color: white;
      width: 15px;
      height: 15px;
      border-radius: 100%;
      top: 8px;
      right: 10px;
      text-align: center;
      font-size: 14px;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
`;

export default Container;
