import React, { Children } from "react";
import { Component } from "react";
import styled from 'styled-components';
import {connect} from 'react-redux';

const QuestionContainer = (Children) =>{
    return (
        <Container>
            {Children}
        </Container>
        

    );

}

export default QuestionContainer;