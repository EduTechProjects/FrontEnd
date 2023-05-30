import React from "react";
import { Component } from "react";
import Button from './components/Button';
import styled from 'styled-components';
import Speaker from './components/Speak/Speaker';
import QuestionContainer from './components/QuestionContainer';
import {useState , useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import Questions from './utils/Questions';

const SpeakContainer = styled.div`
   font-size : 32px;
   text-align : center;
   width : 33%;


`;

const ButtonContainer = styled.div`
   width : 50%;
   text-align : center;
   

`;






const  Speak =() =>{

    const {Questions} = useParams();

    
    return (

        <SpeakContainer>
            <QuestionContainer>
               <p>Q1.</p> Tell me about your favorite food.
            </QuestionContainer>
            <Speaker />
            <ButtonContainer>
                <Button text={"Start"} />
                <Button text={"Done"} />
            </ButtonContainer>
            

        </SpeakContainer>

    );

}

export default Speak;