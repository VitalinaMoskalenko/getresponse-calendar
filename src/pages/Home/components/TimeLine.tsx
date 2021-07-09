import React from "react";
import styled from "styled-components";
import { SmallBody } from "../../../components/Paragraphs";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;

const TimeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  padding: 10px;
  background-color: aqua;
`;

const WorkoutBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  width: 80px;
`;

const Workout = styled(SmallBody)`
  align-self: flex-end;
`;

const TimeLine = () => {
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
      <WorkoutBox>
        <Workout>Workout</Workout>
      </WorkoutBox>
    </Container>
  );
};

export default TimeLine;
