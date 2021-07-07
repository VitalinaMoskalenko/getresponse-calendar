import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Button } from "../../../components";
import { H3 } from "../../../components/Headings";
import { SmallBody } from "../../../components/Paragraphs";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 40px;
`;

const ContainerProducts = styled.div`
  padding: 40px;
`;
const ContainerMobile = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-right: 1px solid ${({ theme }) => theme.colors.darkGrey};
  padding: 40px;
`;
const ContainerQuestions = styled.div`
  padding: 40px;
`;

const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled(H3)`
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const BodyText = styled(SmallBody)`
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const baseTranslationPath = "Pages.HomePage.Footer.";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <ContainerProducts>
        <Title>{t(`${baseTranslationPath}ProductBox.title`)}</Title>
        <BodyText>{t(`${baseTranslationPath}ProductBox.body`)}</BodyText>
        <Button
          text={t(`${baseTranslationPath}ProductBox.buttonBuy`)}
          onClick={() => {}}
          arrowRight={true}
        />
      </ContainerProducts>
      <ContainerMobile>
        <Title>{t(`${baseTranslationPath}MobileBox.title`)}</Title>
        <BodyText>{t(`${baseTranslationPath}MobileBox.body`)}</BodyText>
        <ContainerButton>
          <Button
            text={t(`${baseTranslationPath}MobileBox.buttonIos`)}
            onClick={() => {}}
            arrowRight={true}
          />
          <Button
            text={t(`${baseTranslationPath}MobileBox.buttonAndroid`)}
            onClick={() => {}}
            arrowRight={true}
          />
        </ContainerButton>
      </ContainerMobile>
      <ContainerQuestions>
        <Title>{t(`${baseTranslationPath}QuestionBox.title`)}</Title>
        <BodyText>{t(`${baseTranslationPath}QuestionBox.body`)}</BodyText>
        <Button
          text={t(`${baseTranslationPath}QuestionBox.buttonReadQuestions`)}
          onClick={() => {}}
          arrowRight={true}
        />
      </ContainerQuestions>
    </Container>
  );
};

export default Footer;
