import React from "react";
import styled from "styled-components";
import { SmallBody } from "../Paragraphs";

type LinePropsType = {
  isAccomplished?: boolean;
};

type RoundPropsType = {
  isAccomplished?: boolean;
  isCurrent?: boolean;
};

const Container = styled.div``;
const Round = styled.div<RoundPropsType>`
  height: 10px;
  width: 10px;
  border: 2px solid
    ${({ isAccomplished, theme }) =>
      isAccomplished ? `${theme.colors.green}` : `${theme.colors.darkGrey}`};
  border-radius: 6px;
  background-color: ${({ isAccomplished, isCurrent, theme }) =>
    isAccomplished
      ? `${theme.colors.green}`
      : isCurrent
      ? `${theme.colors.white}`
      : `${theme.colors.darkGrey}`};
`;

const Line = styled.div<LinePropsType>`
  margin-top: 6px;
  width: 10px;
  border-bottom: 2px solid
    ${({ isAccomplished, theme }) =>
      isAccomplished ? `${theme.colors.green}` : `${theme.colors.darkGrey}`};
`;

const ProgressItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  margin-top: 5px;
`;

const ContainerCountWeek = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type PropsType = {
  countWeek: number;
  accomplishedWeek?: number;
  progressTitle: string;
};

const ProgressBar = ({
  countWeek,
  accomplishedWeek,
  progressTitle,
}: PropsType) => {
  return (
    <Container>
      <SmallBody>{progressTitle}</SmallBody>
      <ProgressItem>
        {[...Array(countWeek)].map((e, i) => (
          <ProgressItem key={i}>
            <ContainerCountWeek>
              {accomplishedWeek ? (
                <Round
                  isAccomplished={i < accomplishedWeek}
                  isCurrent={i === accomplishedWeek}
                />
              ) : (
                <Round isCurrent={i === 0} />
              )}
              <SmallBody>{i + 1}</SmallBody>
            </ContainerCountWeek>
            {i !== countWeek - 1 && (
              <Line
                isAccomplished={
                  i < (accomplishedWeek ? accomplishedWeek - 1 : -1)
                }
              />
            )}
          </ProgressItem>
        ))}
      </ProgressItem>
    </Container>
  );
};

export default ProgressBar;
