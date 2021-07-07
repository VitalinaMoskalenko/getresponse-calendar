import React, { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { H3 } from "../Headings";

type HeaderPropsType = {
  isSelected: boolean;
};

const Container = styled.div<HeaderPropsType>`
  width: fit-content;
  padding: 10px;
  border-bottom: ${({ isSelected, theme }) =>
    isSelected ? `1px solid ${theme.colors.orange}` : "0px"};
  color: ${({ isSelected, theme }) =>
    isSelected ? `${theme.colors.orange}` : `${theme.colors.darkGrey}`};
  :before {
    width: 50px;
  }
`;

type PropsType = {
  titleHederItem: string;
  selectedHederItem?: boolean;
};

const Item = ({ selectedHederItem, titleHederItem }: PropsType) => {
  const { t } = useTranslation();

  return (
    <Container isSelected={!!selectedHederItem}>
      <H3>{titleHederItem}</H3>
    </Container>
  );
};

export default Item;
