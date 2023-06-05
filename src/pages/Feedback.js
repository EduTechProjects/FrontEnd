import React from "react";
import { Component } from "react";
import ToggleBox from ".././components/Feedback/Togglebox";  
import styled from "styled-components";

const FeedbackContainer = styled.div`
   
   padding-top :10vh;
   background-color: #F5F5F5;
   display: flex;
   flex-direction: column;
   align-items: center;
   

`;

const Title = styled.div`
   
   font-size : 32px;
   text-align : center;
   font-weight: bold;
   color: black;
   padding-top: 10vh;
   padding-bottom : 15vh;


   
`;

const ToggleContainer = styled.div`
   display : flex;
    margin-top : 20px;
    justify-items: center;
    align-items: center;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap : 40px;
    margin-top : 20px;
    justify-content: center;
    
    align-content : space-between;
    margin-bottom : 20vh;


`;



const Feedback=() =>{

    



    return (
        
        <FeedbackContainer>
            
            <Title>스피킹 결과</Title>
            <ToggleContainer>
                <ToggleBox  />
                <ToggleBox />
                <ToggleBox />
            </ToggleContainer>
            

        </FeedbackContainer>

    
        


    );
}

export default Feedback;