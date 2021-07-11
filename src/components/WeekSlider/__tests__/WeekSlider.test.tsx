import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import WeekSlider from "../";
import { theme } from "../../../config";

it("renders WeekSlider correctly", () => {
  const weekSliderComponent = renderer
    .create(
      <ThemeProvider theme={theme}>
        <WeekSlider onValueChanged={() => {}} countWeek={1} numberWeek={1} />
      </ThemeProvider>
    )
    .toJSON();

  expect(weekSliderComponent).toMatchSnapshot();
});
