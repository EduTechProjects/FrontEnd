import React from "react";
import { Component } from "react";
import Button from './components/Button';
import styled from 'styled-components';
import Speak from './components/Speak/Speak';
import QuestionContainer from './components/QuestionContainer';
import {useNavigate} from 'react-router-dom';




const Speak =() =>{

    const StartHandler = (event) =>{
        

    }

    const EndHandler = (event) =>{

    }

    return (
        <SpeakContainer>
            <QuestionContainer />
            <ButtonContainer>
                <Button text ={"Start"} onClick = {StartHandler}/>
                <Button  text = {"End"} onClick = {EndHandler}/>
            </ButtonContainer>

        </SpeakContainer>
        

    );

}







export default Speak;