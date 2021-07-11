import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import ProgressBar from "../";
import { theme } from "../../../config";

it("renders ProgressBar correctly", () => {
  const progressBarComponent = renderer
    .create(
      <ThemeProvider theme={theme}>
        <ProgressBar countWeek={1} accomplishedWeek={1} progressTitle="" />
      </ThemeProvider>
    )
    .toJSON();

  expect(progressBarComponent).toMatchSnapshot();
});
