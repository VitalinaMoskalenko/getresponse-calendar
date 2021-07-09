import React from "react";
import styled from "styled-components";
import ProgressBar from "../";

export default { title: "ProgressBar" };

export const defaultProgressBar = () => (
  <ProgressBar progressTitle="Your 12 week progress" countWeek={12} />
);

export const accomplishedProgressBar = () => (
  <ProgressBar
    progressTitle="Your 12 week progress"
    countWeek={12}
    accomplishedWeek={7}
  />
);
