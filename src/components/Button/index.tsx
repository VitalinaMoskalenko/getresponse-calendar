import React, { CSSProperties } from "react";
import styled from "styled-components";
import { Body } from "../Paragraphs";

type ArrowPropsType = {
  hasArrow?: boolean;
};

type IconPropsType = {
  hasIcon?: boolean;
};

const Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 8px;
  cursor: pointer;
  margin: 10px 10px 0px 0px;

  :hover {
    opacity: 0.8;
  }
`;

const Text = styled(Body)<IconPropsType>`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-right: ${({ hasIcon }) => (hasIcon ? "10px" : "0px")};
`;

const Arrow = styled(Body)<ArrowPropsType>`
  margin-left: ${({ hasArrow }) => (hasArrow ? "10px" : "0px")};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

type PropsType = {
  style?: CSSProperties;
  arrowLeft?: boolean;
  arrowRight?: boolean;
  icon?: string;
  text?: string;
  onClick: () => void;
};

const Button = ({
  text,
  onClick,
  style,
  arrowLeft,
  arrowRight,
  icon,
}: PropsType) => {
  return (
    <Container style={style} onClick={onClick}>
      {arrowLeft && <Arrow> {"<"} </Arrow>}
      {icon && <Text hasIcon={!!icon}>{icon}</Text>}
      {text && <Text>{text}</Text>}
      {arrowRight && <Arrow hasArrow={!!text}> {">"} </Arrow>}
    </Container>
  );
};

export default Button;
