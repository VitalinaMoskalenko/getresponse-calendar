import React from "react";
import styled from "styled-components";
import DayLine from "..";

export default { title: "DayLine" };

const dataDay = {
  id: 1,
  dayNumber: 64,
  weekNumber: 7,
  meal: [
    {
      name: "Bod•ē Shake",
      isAccomplished: true,
    },
    {
      name: "Ham and Swiss Roll Ups",
      isAccomplished: true,
    },
    {
      name: "Turkey Melt",
      isAccomplished: true,
    },
    {
      name: "Bod•ē Burn with Mozzarella and Tomato Slices",
      isAccomplished: true,
    },
    {
      name: "Turkey Melt",
      isAccomplished: true,
    },
  ],
  carbs: "Low-Carbs",
  workout: false,
};

export const defaultDayLine = () => (
  <DayLine
    dayNumber={dataDay.dayNumber}
    day={dataDay.meal}
    carbs={dataDay.carbs}
    workout={dataDay.workout}
  />
);
export const selectedDayLine = () => (
  <DayLine dayNumber={65} day={dataDay.meal} />
);
