import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Loadingimage } from "../assets/Loading1.svg";
import Navbar from '../components/Common/Navbar';


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

const Title = styled.div`
     font-size: 32px;
     font-weight: bold;
     color : black;
`;

const Loading1 =() =>{
    return (

        <LoadingWrapper>
            <Navbar/>
            <StyledLoadingIcon />
            <Title>잠시 후 스피킹이 시작됩니다.</Title>

        </LoadingWrapper>

    );

}

export default Loading1;
