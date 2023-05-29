import React from "react";
import { Component } from "react";
import Narbar from '/components/Narbar';
import styled from 'styled-compoents';
import Mainbutton from './components/Mainbutton';


const Home=() =>{

    return (
        <HomeContainer>
            <HeaderContainer>
                <Navbar/>
            </HeaderContainer>
            <IntroductionContainer>
                <ImgContainer>
                
                </ImgContainer>
                <HeadeContainer>
                    <p style={"color : #FFFFFF"}>언제나 함께하는</p>
                    <h1>토킹메이트</h1>
                    <ButtonContainer>
                        <Mainbutton/>
                    </ButtonContainer>
                </HeadeContainer>

            </IntroductionContainer>
            <ServiceContainer>
                <Title>토킹메이트는 이런 서비스에요!</Title>
                <p>오직 시험 응시 전, 말하기 상대가 필요하지 않으신가요?<br/>AI와 함께 주제별 말하기를 연습할 수 있어요.</p>
                <SummaryButton>
                    <OptionButton text={"여행"}/>
                    <OptionButton text = {""}/>
                    <OptionButton />
                </SummaryButton>


            </ServiceContainer>
            <RecommendContainer>
                <Title>이런 사람에게 추천해요!</Title>
                <RecommendContainer_text>
                    <p>오픽 시험을 볼 예정인 사람</p>
                    <p>영어 회화에 자신 없는 사람</p>
                    <p>과외를 하기엔 금액이 부담스러운 사람</p>
                </RecommendContainer_text>
                <ReCommendContainer_card>
                    
                </ReCommendContainer_card>


            </RecommendContainer>



        </HomeContainer>


    );

    
}

export default Home;







