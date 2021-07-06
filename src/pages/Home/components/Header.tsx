import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { H3 } from "../../../components";

const Container = styled.div``;

const baseTranslationPath = "Pages.HomePage.Headers.";

const Header = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <H3>{t(`${baseTranslationPath}dashboard`)}</H3>
    </Container>
  );
};

export default Header;
