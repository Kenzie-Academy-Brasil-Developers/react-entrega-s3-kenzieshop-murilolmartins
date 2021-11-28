import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-self: flex-start;
margin-top: 50px;
padding: 10px;
background-color: white;
border-radius: 5px;
div {
    border-bottom: 2px solid black;
    display: flex; 
    justify-content: space-between;
    h2 {
        margin: 0px 0px 5px 0px ;
    }
    p {
        margin: 10px 0px
    }
}
    button {
        width: 80%;
    height: 25px;
    border-radius: 5px;
    background-color: blue;
    color: white;
    cursor: pointer;
    align-self: center;
    margin-top: 5px;
    :hover {
        background-color: lightskyblue;
    }
}
}
`;

export default Container;
