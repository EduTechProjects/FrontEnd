import React from "react";
import { Component } from "react";
import Button from '.././components/Common/Button';
import styled from 'styled-components';
import Speaker from '../components/Speak/Speaker';
import {useState , useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import Questions from '../utils/Questions';
import  ColorCode  from ".././utils/Palette";


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




const  Speak =() =>{
    
    return (

        <SpeakContainer>
            
            <QuestionContainer>
               <p style={{color : ColorCode.SelectBlue }}>Q1.</p> Tell me about your favorite food.
            </QuestionContainer>
            <Speaker />
            <ButtonContainer>
                <Button  text={"Start"} style = {{color : "white", background:ColorCode.SelectBlue}}/>
                <Button text={"Done"} style={{color : "white", background : ColorCode.SelectBlue}} />
            </ButtonContainer>  
        </SpeakContainer>

    );

}

export default Speak;