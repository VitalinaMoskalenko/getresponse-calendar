import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { H3 } from "../Headings";
import WeekItem from "../WeekItem";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px;
`;

type PropsType = {
  countWeek: number;
};

const WeekSlider = ({ countWeek }: PropsType) => {
  const goToAnotherWeek = (i: number) => {
    console.log(i);
  };

  return (
    <Container>
      {[...Array(countWeek)].map((e, i) => (
        <WeekItem
          key={i}
          numberWeek={i + 1}
          countWeek={countWeek}
          onClick={() => goToAnotherWeek(i + 1)}
        />
      ))}
    </Container>
  );
};

export default WeekSlider;
