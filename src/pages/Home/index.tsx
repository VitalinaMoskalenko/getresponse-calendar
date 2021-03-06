import React, { useState } from "react";
import moment from "moment";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  ProgressBar,
  WeekSlider,
  ProteinOption,
  DayLine,
} from "../../components";
import { useTranslation } from "react-i18next";
import { weekData, time } from "../../mock/mock";
import TimeLine from "./components/TimeLine";

const baseTranslationPath = "Pages.HomePage.";

const Container = styled.div``;
const BodyContainer = styled.div`
  margin: 10px 50px;
`;

const DetailDay = styled.div`
  margin: 20px 50px 0px 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
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

  const [weekNumber, setWeekNumber] = useState(7);

  const onValueChanged = (value: number) => {
    setWeekNumber(value);
  };
  return (
    <Container>
      <Header />
      <BodyContainer>
        <HeaderBody>
          <ProgressBar
            progressTitle={t(`${baseTranslationPath}HeaderBody.progressBar`, {
              week: 12,
            })}
            countWeek={12}
            accomplishedWeek={7}
          />
          <WeekSlider
            countWeek={12}
            numberWeek={7}
            onValueChanged={onValueChanged}
          />
          <ProteinOption
            text={t(`${baseTranslationPath}HeaderBody.proteinOption`)}
            onClick={() => {}}
            icon="https://cdn.iconscout.com/icon/free/png-512/cheese-1564339-1323577.png"
          />
        </HeaderBody>
        <DetailDay>
          <TimeLine time={time} />
          {weekData.map(
            (item) =>
              item.weekNumber === weekNumber && (
                <DayLine
                  title={t(`${baseTranslationPath}DayLine.day`, {
                    dayNumber: item.dayNumber,
                  })}
                  key={item.id}
                  dayNumber={item.dayNumber}
                  day={item.meal}
                  carbs={item.carbs}
                  workout={item.workout}
                  guiltFreeDay={item.guiltFreeDay}
                />
              )
          )}
        </DetailDay>
      </BodyContainer>
      <Footer />
    </Container>
  );
}

export default Home;
