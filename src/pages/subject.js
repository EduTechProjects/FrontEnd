import React from "react";
import { Component } from "react";
import styled from 'styled-components';
import Button from '.././components/Common/Button';
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import ColorCode from '../utils/Palette';


const Documentcontainer = styled.div`
   position: absolute;
   width: 480px;
   height: 307px;
   background: #FFFFFF;
   border-radius: 28px;
   justify-items: center;
`;

const SubjectContainer = styled.div`
   position : relative;
   width : 1280px;
   height : 964px;
   background-color: #F5F5F5;
   justify-items: center;
   
`;

const Title = styled.div`
   position : absolute;
   font-size : 32px;
   text-align : center;
   font-weight : 700;
   color : black;

`;

const CautionBox = styled.div`
   position : absolute;
   font-size : 10px;
   width : 337px;
   height: 22px;
   
   
`;

const SubjectBox = styled.div`
   position : absolute;
   width : 565px;
   height : 180px;

`;


const SubjectButton = styled.div`
   display: flex;
   width : 565px;
   height : 180px;

`;

const ChooseTitle = styled.div`
   position: absolute;
   font-weight : 600px;
   font-size : 20px;
   text-align: center;

`;


const SubButton = styled.button`
  margin: 5px;
  padding: 10px 20px;
  background-color: ${props => (props.active ? ColorCode.SelectBlue : ColorCode.UnSelectBlue)};
  color: white;
  border: none;
  border-radius: 17px;
  cursor: pointer;
  width : 151px;
  height : 53px;
  text-align: center;
`;

const Documentation = styled.div`
    position : absolute;
    text-align: left;
    font-size: medium;
`;



const Subject=() =>{

    const navigate = useNavigate();

    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
        navigate('speak/${buttonIndex + 1}');
    }



return (
    <SubjectContainer>
    
    <Title><p style={{color : "ColorCode.SelectBlue"}}>토킹</p>메이트 시작하기</Title>
    <Documentcontainer>
        <p style={{fontWeight : "bold", size:"20px"}}>사용 설명서</p>
        <Documentation>
            1. 아래 3개의 주제 중 하나를 골라주세요.<br/>
            2. 선택한 주제와 관련된 질문 3개가 제공됩니다.<br/>
            3. 각 질문에 영어로 답변해주세요. (제한 시간 2분)<br/>
            4. START 버튼을 누른 뒤 답변을 시작하고, 답변이 끝나면 END 버튼을 눌러주세요.<br/>
            5. 모든 질문에 대한 답변이 끝나면 피드백이 제공됩니다.<br />
        </Documentation>
        <CautionBox>
            <p><img src="../assets/catuion.png/" style={{width :"20px", height:"26px"}}/>질문당 권장 답변 시간인 2분에 맞추어 설정했습니다.</p>
        </CautionBox>        
    </Documentcontainer>
    <SubjectBox>
        <ChooseTitle>주제를 선택해주세요.</ChooseTitle>
        <SubjectButton>
            <SubButton text={"여행"}  active = {activeButton ===0} onClick ={() => handleClick(0)}/>
            <SubButton text = {"음식"} active = {activeButton ===1} onCLick = {() => handleClick(1)}/>
            <SubButton text ={"가족"} active = {activeButton ===2} onClick = {() => handleClick(2)}/>
        </SubjectButton>

    </SubjectBox>
    <Button text={"시작하기"} style={{color : "white", background : ColorCode.MainBlue, borderRadius : "61px" ,width:"237px", height:"73px"}} />


</SubjectContainer>

);


}


   

export default Subject;



