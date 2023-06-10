import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import AnswerContainer from './AnswerContainer';
import FeedbackContainer from './FeedbackContainer';
import { ColorCode } from './../../utils/Palette';
import {ReactComponent as ToggleIcon} from './../../assets/toggle.svg';


const Container = styled.div`
   background-color: white;  
   border-radius: 14px;
   width : 700px;
   flex-direction: column;
   justify-content: space-between;
   display: flex;
   padding-bottom: 3vh;
   margin-bottom : 2vh;
   justify-content: space-between;
   padding-left :2vw;
   padding-right: 2vw;
   padding-top: 2vh;

`;


const ToggleIconstyled = styled(ToggleIcon)`
    width : 14px;
    height : 16px;
    transition : transfrom 0.3s ease;
    transform : ${({rotate}) => 'rotate(${rotate}deg'};

`;

const ToggleBox = (props) =>{

    const [isToggleon, setIsToggleOn] = useState('true');
    const [rotate, setRotate] = useState(0);
     

    const ToggleHandler=(event)=>{
        setIsToggleOn((preveToggle) =>!preveToggle);
        setRotate((prevRotate)=>prevRotate +90);

    }


    return (
        <Container>
            <div style={{color : ColorCode.SelectBlue, fontSize:"20px", fontWeight:"bold", alignSelf: "flex-start"}}>{props.index}</div>
            <div style={{color : ColorCode.SelectBlue, fontSize:"20px", fontWeight:"bold", textAlign: "right"}}><ToggleIconstyled rotate = {rotate} onClick={ToggleHandler}/>조회하기</div>
            
            
             {isToggleon && (
                <React.Fragment>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>  
                    <AnswerContainer/>
                    <FeedbackContainer/>
                  </div>
                </React.Fragment>
            )} 
        </Container>

    );


}

export default ToggleBox;