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


const SpeakContainer = styled.div`
   background-color: #F5F5F5;
   height: 832px;
   text-align: center;
   
`;

const QuestionContainer = styled.div`
    background-color: #F5F5F5; 
     font-weight: bold;
     font-size: 32px;
     width : 50%;
     height : 50px;
     text-align: center;
     padding-top: 20vh;
     padding-left: 50%;
`;
const ButtonContainer = styled.div`
      height : 80px;
      display: flex;
      padding-top : 20vh;
      padding-left : 50%;
`;




const  Speak =() =>{
   
   const [showSpeaker, setShowSpeaker] = useState(false);
   const handleClick = ()=>{
    setShowSpeaker(true);
   }
    
    return (

        <SpeakContainer>
            
            <QuestionContainer>
               <b style={{color : ColorCode.SelectBlue }}>Q1.</b> Tell me about your favorite food.
            </QuestionContainer>
            {showSpeaker && <Speaker/>}
            <Speaker />
            <ButtonContainer>
                <Button  text={"Start"} style = {{color : "white", background:ColorCode.SelectBlue}} onClick={handleClick}/>
                <Button text={"Done"} style={{color : "white", background : ColorCode.SelectBlue}} />
            </ButtonContainer>  
        </SpeakContainer>

    );

}

export default Speak;