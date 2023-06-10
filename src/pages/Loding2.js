import React from "react";
import { ReactComponent as Loadingimage } from "../assets/Loading2.svg";
import Navbar from "../components/Common/Navbar";
import styled from "styled-components";

const LoadingWrapper = styled.div`
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    align-items:  center;
    justify-content: center;

`;

const StyledLoadingIcon = styled(Loadingimage)`
     width : 240px;
     height : 240px;
`;

const title = styled.div`
      font-size: 32px;
      font-weight: bold;
`;

const Loading2= ()=>{
    return (
        <LoadingWrapper>
            <Navbar/>
            <StyledLoadingIcon/>
            <title>다음 질문을 생성중입니다...</title>
            
        </LoadingWrapper>


    );
}

export default Loading2;