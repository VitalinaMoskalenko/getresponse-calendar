import React from "react";
import styled from "styled-components";
import WeekItem from "../";

export default { title: "WeekItem" };

export const defaultWeekItem = () => (
  <WeekItem countWeek={12} numberWeek={7} onClick={() => {}} />
);

export const leftWeekItem = () => (
  <WeekItem countWeek={12} numberWeek={1} onClick={() => {}} />
);

export const rightWeekItem = () => (
  <WeekItem countWeek={12} numberWeek={12} onClick={() => {}} />
);
