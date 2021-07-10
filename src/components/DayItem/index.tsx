import React from "react";
import styled from "styled-components";
import { SmallBody } from "../Paragraphs";

type HeaderPropsType = {
  isSelected: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100px;
  height: 80px;
  padding: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkGrey};
`;

const AccomplishedIcon = styled.img`
  height: 20px;
`;

type PropsType = {
  meal: string;
  isAccomplished?: boolean;
};

const DayItem = ({ meal, isAccomplished }: PropsType) => {
  return (
    <Container>
      <SmallBody>{meal}</SmallBody>
      {isAccomplished && (
        <AccomplishedIcon src="https://static.thenounproject.com/png/966940-200.png" />
      )}
    </Container>
  );
};

export default DayItem;
