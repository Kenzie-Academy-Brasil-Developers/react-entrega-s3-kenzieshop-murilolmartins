import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 320px;
  background-color: white;
  padding: 10px 0px;
  margin-bottom: 10px;
  border-radius: 5px;
  position: relative;
  .count {
    position: absolute;
    background-color: blue;
    color: white;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    top: 8px;
    right: 10px;
    text-align: center;
    font-size: 20px;
  }
  .image {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-bottom: 2px solid gray;
    img {
      height: 250px;
      width: 150px;
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    .title {
      margin: 0px;
      margin-top: 5px;
      width: 100%;
    }
    .price {
      width: 100%;
      margin: 5px 0px 10px 0px;
    }
  }
  button {
    width: 60%;
    height: 25px;
    border-radius: 5px;
    background-color: blue;
    color: white;
    cursor: pointer;
    :hover {
      background-color: lightskyblue;
    }
  }
`;

export default Container;
