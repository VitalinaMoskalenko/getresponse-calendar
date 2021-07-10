import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import DayItem from "../DayItem";
import { H3 } from "../Headings";
import { Body, SmallBody } from "../Paragraphs";

type ContainerPropsType = {
  isSelected: boolean;
  isGuiltFreeDay?: boolean;
};

const Container = styled.div<ContainerPropsType>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ isGuiltFreeDay }) => isGuiltFreeDay && "space-between"};
  width: fit-content;
  border: ${({ isSelected, theme }) =>
    isSelected ? `2px solid ${theme.colors.orange}` : "0px"};
  margin-top: ${({ isSelected }) => (isSelected ? "0px" : "2px")};
`;

const DayNumber = styled.div<ContainerPropsType>`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 40px;
  padding: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkGrey};
  color: ${({ isSelected, theme }) =>
    isSelected ? `${theme.colors.orange}` : `${theme.colors.green}`};
`;

const AdditionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CarbsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 20px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkGrey};
`;

const WorkoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 20px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

const PrintContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  margin-bottom: 2px;
  height: 62px;
  padding: 10px;
  border-top: 2px solid ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

const GuiltFreeDayContainer = styled.div`
  align-items: center;
  display: flex;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const IconWorkout = styled.img``;

type PropsType = {
  dayNumber: number;
  carbs?: string;
  workout?: boolean;
  guiltFreeDay?: boolean;
  day?: {
    name: string;
    isAccomplished: boolean;
  }[];
};

const baseTranslationPath = "Pages.HomePage.DayLine.";

const DayLine = ({
  dayNumber,
  day,
  guiltFreeDay,
  carbs,
  workout,
}: PropsType) => {
  const { t } = useTranslation();
  return (
    <Container isGuiltFreeDay={guiltFreeDay} isSelected={dayNumber === 65}>
      <DayNumber isSelected={dayNumber === 65}>
        <H3>{t(`${baseTranslationPath}day`, { dayNumber: dayNumber })}</H3>
      </DayNumber>
      {guiltFreeDay ? (
        <GuiltFreeDayContainer>
          <H3>GUILT-FREE DAY</H3>
        </GuiltFreeDayContainer>
      ) : (
        day?.map((item, index) => (
          <DayItem
            key={index}
            meal={item.name}
            isAccomplished={item.isAccomplished}
          />
        ))
      )}
      {guiltFreeDay ? (
        <PrintContainer>
          <h5>PrintContainer</h5>
        </PrintContainer>
      ) : (
        <AdditionalContainer>
          <CarbsContainer>
            <SmallBody>{carbs}</SmallBody>
          </CarbsContainer>
          <WorkoutContainer>
            <IconWorkout />
          </WorkoutContainer>
        </AdditionalContainer>
      )}
    </Container>
  );
};

export default DayLine;
