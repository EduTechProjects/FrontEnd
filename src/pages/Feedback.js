import React from "react";
import ToggleBox from ".././components/Feedback/Togglebox";
import styled from "styled-components";

const FeedbackContainer = styled.div`
  padding-top: 10vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  color: black;
  padding-top: 4vh;
  padding-bottom: 5vh;
`;

const ToggleContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 20px;
  justify-content: center;

  align-content: space-between;
  margin-bottom: 20vh;
`;

const Feedback = () => {
  return (
    <FeedbackContainer>
      <Title>스피킹 결과</Title>
      <ToggleContainer>
        <ToggleBox index={"1"} />
        <ToggleBox index={"2"} />
        <ToggleBox index={"3"} />
      </ToggleContainer>
    </FeedbackContainer>
  );
};

export default Feedback;
