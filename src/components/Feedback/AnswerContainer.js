import React from "react";
import { ColorCode } from "./../../utils/Palette";
import styled from "styled-components";

const Container = styled.div`
    width : 90%;
    background-color: white;
    font-size :20px;
    text-align: justify;
    line-height: 150%;

`;

const Document = styled.div`
      padding-left:7vw;
      text-align-last: left;
`;

const AnswerContainer = () =>{

    return (
        <Container>
            <Document>
            <p style={{color:"black", fontWeight:"bold"}}>Feedback</p>
            <p style={{fontSize:"20px", color:"black"}}>
            I can tell you about a popular and widely loved dish that many people enjoy, pizza. Pizza is a versatile and delicious food that originated in Italy but has become popular worldwide. It typically consists of a round, flat dough topped with tomato sauce, cheese, and various toppings such as vegetables, meats, and herbs. It is often baked in an oven until the crust is crispy and the cheese is melted and bubbly. Pizza offers a combination of flavors, textures, and toppings, making it a satisfying and enjoyable meal for many.
            
            </p>
            </Document>
            
        </Container>

    );

}

export default AnswerContainer;