import React from "react";
import styled from "styled-components";
import WeekSlider from "..";

export default { title: "WeekSlider" };

const onValueChanged = (value: number) => {
  console.log(value);
};

export const defaultWeekSlider = () => (
  <WeekSlider countWeek={12} numberWeek={7} onValueChanged={onValueChanged} />
);
