import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import DayLine from "../";
import { theme } from "../../../config";

it("renders DayLine correctly", () => {
  const dayLineComponent = renderer
    .create(
      <ThemeProvider theme={theme}>
        <DayLine dayNumber={65} day={[{ name: "", isAccomplished: false }]} />
      </ThemeProvider>
    )
    .toJSON();

  expect(dayLineComponent).toMatchSnapshot();
});
