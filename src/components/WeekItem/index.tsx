import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { H3 } from "../Headings";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px;
`;

const ButtonWeek = styled(Button).attrs({
  style: {
    margin: "0px 10px",
  },
})``;

type PropsType = {
  numberWeek: number;
  countWeek: number;
  onClick: () => void;
};

const WeekItem = ({ onClick, numberWeek, countWeek }: PropsType) => {
  return (
    <Container>
      {numberWeek !== 1 && <ButtonWeek arrowLeft onClick={onClick} />}
      <H3>WeekItem {numberWeek}</H3>
      {numberWeek !== countWeek && <ButtonWeek arrowRight onClick={onClick} />}
    </Container>
  );
};

export default WeekItem;
