import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ColorCode from "../utils/Palette";
import { ReactComponent as Caution } from "../assets/caution.svg";
import axios from 'axios';

const Subjectcontainer= styled.div`
   background-color: #F5F5F5;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

`;
const Title = styled.div`
   font-size: 32px;
   font-weight: bold;
   padding-top : 15vh;
   padding-bottom : 5vh;

`;

const Document= styled.div`
    font-size : 16px;
    background-color: white;
    width : 37vw;
    justify-content: center;
    align-items: center;
    border-radius: 28px;
    height: 45vh;
    margin-bottom: 5vh;
    padding-bottom: 3vh;


`;

const Button = styled.button`
  text-align: center;
  width: 150px;
  height: 40px;
  background-color: ${(props) => (props.isActive ? "#00558D" : "#FFFFFF")};
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#000000")};
  font-size: 16px;
  border-radius: 16px;
  border: none;
  margin-right: 10px;
  cursor: pointer; 
`;

const Cautionbox= styled.div`
    display : inline-flex;
    font-size: 14px;
    color : gray;
    
`;
const SubjectButtons = styled.div`
     display: flex;
     padding-top: 5vh;

`;

const SubjectTitle= styled.div`
      font-size: 20px;
      font-weight: bold;
      padding-top: 5vh;

`;

const DocumentBox = styled.div`
     width : 80%;
     text-align: justify;
     text-align-last:left;
     margin : 0 auto;
     line-height: 170%;
     

     

`;


const StartButton = styled.button`
     text-align: center;
     width: 230px;
     height: 73px;
     background-color: #00558D;
     color :white;
     font-size : 32px;
     border-radius: 61px;
     border :none;
     margin-top : 15vh;
     margin-bottom: 20vh;
     font-weight: bold;
`;

const CautionIcon = styled(Caution)`
     width : 15px;
     height: 15px;

`;

const Subject=() =>{

     const navigate = useNavigate();
     const [selectTopic, setSelectTopic ] = React.useState(null);

     const handleSubButtonClick = (index) => {
          setSelectTopic(index);
     };

     

     const handleStartButtonClick=()=>{
          if(selectTopic !==null){
               let topic;
               if (selectTopic ===1) {
                    topic = "food";
               } else if (selectTopic===2){
                    topic = "travel";
               } else if(selectTopic ===3){
                    topic = "family";
               }
               navigate(`/speak/${topic}`);
          } else {
               console.error('토픽을 설정해주세요.')
          }
     };


  
  return(
    <>
       <Subjectcontainer>
           <Title style={{color : "black"}}><b style={{color :ColorCode.SelectBlue}}>토킹</b> 메이트 시작하기</Title>
           <Document>
            <p style={{fontWeight:"bold", fontSize:"24px"}}>사용 설명서</p>
            <DocumentBox>
            <p>
            1. 아래 3개의 주제 중 하나를 골라주세요.<br/>
            2. 선택한 주제와 관련된 질문 3개가 제공됩니다.<br/>
            3. 각 질문에 영어로 답변해주세요. (제한 시간 2분)<br/>
            4. START 버튼을 누른 뒤 답변을 시작하고, 답변이 끝나면 END 버튼을 눌러주세요.<br/>
            5. 모든 질문에 대한 답변이 끝나면 피드백이 제공됩니다.<br/>
            </p>
            </DocumentBox>
            <Cautionbox><CautionIcon/>질문당 권장 답변 시간인 2분에 맞추어 설정했습니다.</Cautionbox>
           </Document>
           <SubjectTitle>주제를 선택해주세요.</SubjectTitle>
           <SubjectButtons>
             <Button  onClick={()=>handleSubButtonClick(1)}>음식</Button>
             <Button  onClick={()=>handleSubButtonClick(2)}>여행</Button>
             <Button  onClick={()=>handleSubButtonClick(3)}>가족</Button>
           </SubjectButtons>
           <StartButton onClick={handleStartButtonClick}>시작하기</StartButton>
       </Subjectcontainer>
    
    </>

  );
}

export default Subject;

