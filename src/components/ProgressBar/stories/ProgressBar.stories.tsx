import React from "react";
import styled from "styled-components";
import ProgressBar from "../";

export default { title: "ProgressBar" };

export const defaultProgressBar = () => <ProgressBar countWeek={12} />;

export const accomplishedProgressBar = () => (
  <ProgressBar countWeek={12} accomplishedWeek={7} />
);
