import React from "react";
import { Component } from "react";
import styled from 'styled-components';
import Button from './components/Common/Button';
import Navbar from './components/Common/Navbar';
import {useNavigate} from 'react-router-dom';
import ColorCode from './utils/ColorCode';

const SubjectContainer = styled.div`




`;

const Title = styled.div`



`;


const SubjectButton = styled.div`



`;


const Button = styled.button`
  margin: 5px;
  padding: 10px 20px;
  background-color: ${props => (props.active ? "SelectBlue" : "UnSelectBlue")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Subject=() =>{

    const navigate = useNavigate();

    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
        navigate('speak/${buttonIndex + 1}');
    }

    <SubjectContainer>
        <Navbar />
        <Title>토킹메이트 시작하기</Title>
        <SubjectButton>
            <Button text={"여행"}  active = {activeButton ===0} onClick ={() => handleClick(0)}/>
            <Button text = {"음식"} active = {activeButton ===1} onCLick = {() => handleClick(1)}/>
            <Button text ={"가족"} active = {activeButton ===2} onClick = {() => handleClick(2)}/>
        </SubjectButton>

   
    </SubjectContainer>


}


   

export default Subject;



