import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import { H3 } from "../Headings";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px;
  height: 100%;
`;

const ButtonWeek = styled(Button).attrs({
  style: {
    margin: "0px 10px",
    height: "50px",
  },
})``;

const TitleWeek = styled(H3)`
  color: ${({ theme }) => theme.colors.orange};
`;

type PropsType = {
  numberWeek: number;
  countWeek: number;
  onValueChanged: (value: number, previousValue: number) => void;
};

const WeekSlider = ({ onValueChanged, numberWeek, countWeek }: PropsType) => {
  const [currentWeek, setCurrentWeek] = useState(numberWeek);
  const onLeftClick = () => {
    onValueChanged(currentWeek - 1, currentWeek);
    setCurrentWeek(currentWeek - 1);
  };

  const onRightClick = () => {
    onValueChanged(currentWeek + 1, currentWeek);
    setCurrentWeek(currentWeek + 1);
  };

  return (
    <Container>
      {currentWeek !== 1 && <ButtonWeek arrowLeft onClick={onLeftClick} />}
      <TitleWeek>Week {currentWeek}</TitleWeek>
      {currentWeek !== countWeek && (
        <ButtonWeek arrowRight onClick={onRightClick} />
      )}
    </Container>
  );
};

export default WeekSlider;
