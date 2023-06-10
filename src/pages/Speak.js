import React from "react";
import Button from '.././components/Common/Button';
import styled from 'styled-components';
import Speaker from '../components/Speak/Speaker';
import { useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import Questions from '.././utils/Questions';
import  ColorCode  from ".././utils/Palette";
import {useState} from 'react';
import Navbar from "../components/Common/Navbar";
import { redirect } from "react-router-dom";



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
    
   //const history = useHistory();
   //const navigate = useNavigate();
   const {topic} =useParams();
   const questionArr= Questions[topic];
   const [isFeedbbackPage, setIsFeedbackPage] = useState(false);
   const [showSpeaker, setShowSpeaker] = useState(false);
   const [buttonColor , setButtonColor] = useState(ColorCode.SelectBlue);
   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
   const currentQuestion = questionArr[currentQuestionIndex];

   const handleClick = ()=>{
    setShowSpeaker(true);
   }

   const handleButtonClick=() =>{
       setButtonColor(ColorCode.MainBlue)
   }

   const handleDoneClick=()=>{
    setShowSpeaker(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setShowSpeaker(true);

    if(currentQuestionIndex === questionArr.length-2){
         setIsFeedbackPage(true);
    } else if (currentQuestionIndex === questionArr.length-1){
        history.pushState('/feedback');
    }
   }
    
    return (

        <SpeakContainer>
            <Navbar />
            
            <QuestionContainer>
               <b style={{color : ColorCode.SelectBlue }}>Q{currentQuestionIndex + 1}.</b> {questionArr[currentQuestionIndex]}
            </QuestionContainer>
            {showSpeaker && (
                <SpeakerWrapper>
                    {showSpeaker &&<Speaker />}
                    {isFeedbbackPage && <redirect to = "/feedback"/>}
                </SpeakerWrapper>
            )}
            
            <ButtonContainer>
                <Button  text={"Start"} style = {{color : "white", background:buttonColor,  cursor: "pointer"}} onClick={()=>{
                    handleClick();
                    handleButtonClick();
                }}/>
                <Button text={"Done"} style={{color : "white", background : buttonColor,  cursor: "pointer"}} onClick={()=>{
                    handleDoneClick();handleButtonClick();
                }}/>
            </ButtonContainer>  
        </SpeakContainer>

    );

}

export default Speak;