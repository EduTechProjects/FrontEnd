import React from "react";
import { Component } from "react";
import Button from '.././components/Common/Button';
import styled from 'styled-components';
import Speaker from '../components/Speak/Speaker';
import { useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import Questions from '../utils/Questions';
import  ColorCode  from ".././utils/Palette";
import {useState} from 'react';
import Navbar from "../components/Common/Navbar";



const SpeakContainer = styled.div`
   background-color: #F5F5F5;
   text-align: center;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   
   position:relative;

   
`;

const QuestionContainer = styled.div`
    background-color: #F5F5F5; 
     font-weight: bold;
     font-size: 30px;
     width : 50%;
     height : 40px;
     text-align: center;
     padding-top: 20vh;
     margin : 0 auto;
     padding-bottom: 20vh;
     
`;
const ButtonContainer = styled.div`
      padding-top: 5vh;
      margin:0 auto;
      gap:30px;
      justify-items: flex-start;
      display: flex;
`;

const SpeakerWrapper = styled.div`

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;



const  Speak =() =>{
   
   const [showSpeaker, setShowSpeaker] = useState(false);
   const [buttonColor , setButtonColor] = useState(ColorCode.SelectBlue);

   const handleClick = ()=>{
    setShowSpeaker(true);
   }

   const handleButtonClick=() =>{
       setButtonColor(ColorCode.MainBlue)
   }

   const handleDoneClick=()=>{
    setShowSpeaker(false);
   }
    
    return (

        <SpeakContainer>
            
            <QuestionContainer>
               <b style={{color : ColorCode.SelectBlue }}>Q1.</b> Tell me about your favorite food.
            </QuestionContainer>
            {showSpeaker && (
                <SpeakerWrapper>
                    <Speaker />
                </SpeakerWrapper>
            )}
            
            <ButtonContainer>
                <Button  text={"Start"} style = {{color : "white", background:buttonColor, }} onClick={()=>{
                    handleClick();
                    handleButtonClick();
                }}/>
                <Button text={"Done"} style={{color : "white", background : buttonColor}} onClick={()=>{
                    handleDoneClick();handleButtonClick();
                }}/>
            </ButtonContainer>  
        </SpeakContainer>

    );

}

export default Speak;