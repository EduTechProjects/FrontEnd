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


`;

const ButtonContainer = styled.div`

`;




const  Speak =() =>{

    const {Questions} = useParams();

    
    return (

        <SpeakContainer>
            <QuestionContainer>
                
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