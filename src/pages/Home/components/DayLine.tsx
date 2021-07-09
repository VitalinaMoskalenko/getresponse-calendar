import React from "react";
import styled from "styled-components";
import { SmallBody } from "../../../components/Paragraphs";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
`;

const TimeBox = styled.div`
  background-color: aqua;
`;
const EmptyBox = styled.div`
  height: 40px;
  width: 80px;
  background-color: aqua;
`;

const Workout = styled(SmallBody)`
  align-self: flex-end;
`;

const DayLine = () => {
  return (
    <Container>
      <TimeBox>
        <SmallBody>6:00AM</SmallBody>
      </TimeBox>
      <TimeBox>
        <SmallBody>9:00AM</SmallBody>
      </TimeBox>
      <TimeBox>
        <SmallBody>12:00PM</SmallBody>
      </TimeBox>
      <TimeBox>
        <SmallBody>3:00PM</SmallBody>
      </TimeBox>
      <TimeBox>
        <SmallBody>6:00PM</SmallBody>
      </TimeBox>
    </Container>
  );
};

export default DayLine;
