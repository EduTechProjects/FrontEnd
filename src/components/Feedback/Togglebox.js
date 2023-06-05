import React from 'react';
import styled from 'styled-components';
import { Component } from 'react';
import {useState} from 'react';
import AnswerContainer from './AnswerContainer';
import FeedbackContainer from './FeedbackContainer';
import { ColorCode } from './../../utils/Palette';
import {ReactComponent as ToggleIcon} from './../../assets/toggle.svg';


const Container = styled.div`
   background-color: white;  
   border-radius: 14px;
   width : 800px;
   justify-content: center;
   padding-bottom: 10vh;

`;


const ToggleIconstyled = styled(ToggleIcon)`
    width : 14px;
    height : 16px;

`;

const ToggleBox = () =>{

    const [isToggleon, setIsToggleOn] = useState('false');
    const [rotate, setRotate] = useState(0);
     

    const ToggleHandler=(event)=>{
        setIsToggleOn((preveToggle) =>!preveToggle);

    }


    return (
        <Container>
            <div>A1.</div>
            <div style={{color : ColorCode.SelectBlue, fontSize:"24px", fontWeight:"bold"}}>조회하기</div>
            <ToggleIconstyled onClick={ToggleHandler}/>
             {isToggleon && (
                <React.Fragment>
                    <AnswerContainer/>
                    <FeedbackContainer/>
                </React.Fragment>
            )} 
        </Container>

    );


}

export default ToggleBox;