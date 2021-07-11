import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { SmallBody } from "../Paragraphs";

type ImgPropsType = {
  iconUrl: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
`;

const IconContainer = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px;
`;

const Img = styled.img<ImgPropsType>`
  content: url(${({ iconUrl }) => `${iconUrl}`});
  margin-right: 10px;
  height: 35px;
`;

type PropsType = {
  icon: string;
  text?: string;
  onClick: () => void;
};

const ProteinOption = ({ text, icon, onClick }: PropsType) => {
  return (
    <Container>
      <SmallBody>{text}</SmallBody>
      <IconContainer>
        <Img iconUrl={icon} onClick={onClick} />
        <Img iconUrl={icon} onClick={onClick} />
        <Img iconUrl={icon} onClick={onClick} />
        <Img iconUrl={icon} onClick={onClick} />
        <Img iconUrl={icon} onClick={onClick} />
      </IconContainer>
    </Container>
  );
};

export default ProteinOption;
