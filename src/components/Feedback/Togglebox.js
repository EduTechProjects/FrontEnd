import React from 'react';
import styled from 'styled-components';
import { Component } from 'react';
import {useState} from 'react';
import AnswerContainer from './AnswerContainer';
import FeedbackContainer from './FeedbackContainer';
import { ColorCode } from './../../utils/Palette';


const Container = styled.div`
   background-color: white;
   display : flex;
   border-radius: 14px;

`;



const ToggleBox = () =>{

    const [toggle, setToggle] = useState('false');
    const [rotate, setRotate] = useState(0);
     

    const ToggleHandler=(event)=>{
        setToggle((preveToggle) =>!preveToggle);

    }


    return (
        <Container>
            <div>A1.</div>
            <div style={{color : ColorCode.SelectBlue, fontSize:"24px", fontWeight:"bold"}}>조회하기</div>
            <button 
            style=
            {{backgroundImage: "url('../assets/toggle.png')", 
            width : "29px", 
            height : "25px", 
            backgroundRepeat : "no-repeat",
            backgroundPosition : 'center',
            backgroundSize:'cover',
            transform : 'rotate(${rotate}deg)',
            }} onClick={ToggleHandler}></button>
            {/* {Toggle && (
                <React.Fragment>
                    <AnswerContainer/>
                    <FeedbackContainer/>

                </React.Fragment>
            )} */}
        </Container>

    );


}

export default ToggleBox;