import React from "react";
import { Component } from "react";
import Mainbutton from './components/Mainbutton';

const FamilySpeak =() =>{

    return (
        <div className = "SpeakContainer">

            <Question>
                <p>{Question.Family[0]}</p>
            </Question>
            <div className = "Speak__buttons">
                <Mainbutton>START</Mainbutton>
                <Mainbutton>END</Mainbutton>

            </div>

        </div>

    );

}

export default FamilySpeak;