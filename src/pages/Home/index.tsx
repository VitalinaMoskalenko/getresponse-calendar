import React from "react";
import moment from "moment";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Fotter";
import { ProgressBar, WeekSlider, ProteinOption } from "../../components";
import { useTranslation } from "react-i18next";
import TimeLine from "./components/TimeLine";
import DayLine from "./components/DayLine";

const baseTranslationPath = "Pages.HomePage.HeaderBody.";

const Container = styled.div``;
const BodyContainer = styled.div`
  margin: 10px 50px;
`;

const DetailDay = styled.div`
  margin: 20px 50px 0px 50px;
  display: flex;
  flex-direction: row;
`;

const HeaderBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function Home() {
  const { t } = useTranslation();

  const onValueChanged = (value: number) => {
    console.log(value);
  };
  return (
    <Container>
      <Header />
      <BodyContainer>
        <HeaderBody>
          <ProgressBar
            progressTitle={t(`${baseTranslationPath}progressBar`, { week: 12 })}
            countWeek={12}
            accomplishedWeek={7}
          />
          <WeekSlider
            countWeek={12}
            numberWeek={7}
            onValueChanged={onValueChanged}
          />
          <ProteinOption
            onClick={() => {}}
            icon="https://cdn.iconscout.com/icon/free/png-512/cheese-1564339-1323577.png"
          />
        </HeaderBody>
        <DetailDay>
          <TimeLine />
        </DetailDay>
      </BodyContainer>
      <Footer />
    </Container>
  );
}

export default Home;
