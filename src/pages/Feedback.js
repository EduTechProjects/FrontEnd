import React from "react";
import { Component } from "react";
import ToggleBox from "./components/ToggleBox";
import Navbar from './components/Common/Navbar';    

const FeedbackContainer = styled.div`
   position: relative;
   width: 1280px;
   background-color: #F5F5F5;
   justify-items: center;
   align-items: center;


`;

const Title = styled.div`
   
   position : absolute;
   font-size : 32px;
   text-align : center;
   justify-self:  center;
   font-weight: bold;


   
`;

const ToggleContainer = styled.div`
    position: absolute;
    margin-top : 20px;
    justify-items: center;
    align-items: center;


`;

const ToggleBox = styled.div`
    margin-top : 15px;
    display: block;

`;

const Feedback=() =>{

    



    return (
        
        <FeedbackContainer>
            <Navbar />
            <Title>스피킹 결과</Title>
            <ToggleContainer>
                <ToggleBox />
                <ToggleBox />
                <ToggleBox />
            </ToggleContainer>
            

        </FeedbackContainer>

    
        


    );
}

export default Feedback;