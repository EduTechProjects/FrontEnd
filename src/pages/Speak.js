import React from "react";
import { Component } from "react";
import Button from './components/Button';
import styled from 'styled-components';
import Speaker from '../components/Speak/Speaker';
import {useState , useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import Questions from './utils/Questions';
import  ColorCode  from "../utils/palette";
import Navbar from '../components/Common/Navbar';

const SpeakContainer = styled.div`
   background-color: #F5F5F5;
   position : relative;
   width : 1280px;
   height: 832px;
`;

const QuestionContainer = styled.div`
     font-weight: bold;
     font-size: 32px;
     position: absolute;
     width : 50%;
     height : 50px;
`;
const ButtonContainer = styled.div`
      position: absolute;
      width : 50%;
      height : 80px;
      display: flex;
`;

const Button = styled.button`
    position : absolute;
    color : white;
    

     
`;



const  Speak =() =>{
    
    return (

        <SpeakContainer>
            <Navbar />
            <QuestionContainer>
               <p style={{color : ColorCode.SelectBlue }}>Q1.</p> Tell me about your favorite food.
            </QuestionContainer>
            <Speaker />
            <ButtonContainer>
                <Button text={"Start"} style = {{color : "white", background:ColorCode.SelectBlue}}/>
                <Button text={"Done"} />
            </ButtonContainer>  
        </SpeakContainer>

    );

}

export default Speak;