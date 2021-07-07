import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { H3, HeaderItem } from "../../../components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 50px;
`;

const baseTranslationPath = "Pages.HomePage.Headers.";

const Header = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <HeaderItem
        selectedHederItem={true}
        titleHederItem={t(`${baseTranslationPath}dashboard`)}
      />
      <HeaderItem titleHederItem={t(`${baseTranslationPath}recipes`)} />
      <HeaderItem titleHederItem={t(`${baseTranslationPath}challenge`)} />
    </Container>
  );
};

export default Header;
