import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import { H3 } from "../Headings";

type ImgPropsType = {
  iconUrl: string;
};

const Container = styled.div`
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
  onClick: () => void;
};

const ProteinOption = ({ icon, onClick }: PropsType) => {
  return (
    <Container>
      <Img iconUrl={icon} onClick={onClick} />
      <Img iconUrl={icon} onClick={onClick} />
      <Img iconUrl={icon} onClick={onClick} />
      <Img iconUrl={icon} onClick={onClick} />
      <Img iconUrl={icon} onClick={onClick} />
    </Container>
  );
};

export default ProteinOption;
