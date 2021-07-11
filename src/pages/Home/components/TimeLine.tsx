import React, { useEffect } from "react";
import styled from "styled-components";
import { SmallBody } from "../../../components";

type TimeItemPropsType = {
  isIndex: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding-top: 64px;
  margin-bottom: 2px;
`;

const TimeItem = styled.div<TimeItemPropsType>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: ${({ isIndex }) => (isIndex ? "122px" : "80px")};
  padding: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkGrey};
`;

const Workout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 20px;
  padding: 10px;
`;

type PropsType = {
  time: {
    id: number;
    name: string;
  }[];
};

const TimeLine = ({ time }: PropsType) => {
  useEffect(() => {
    return () => {
      console.log(time.length);
    };
  }, [time]);
  return (
    <Container>
      {time.map((item, index) => (
        <TimeItem key={item.id} isIndex={index === time.length - 1}>
          <SmallBody>{item.name}</SmallBody>
        </TimeItem>
      ))}
      <Workout>
        <SmallBody>Workout</SmallBody>
      </Workout>
    </Container>
  );
};

export default TimeLine;
