import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import DayItem from "../";
import { theme } from "../../../config";

it("renders DayItem correctly", () => {
  const aayItemComponent = renderer
    .create(
      <ThemeProvider theme={theme}>
        <DayItem meal="meal" isAccomplished />
      </ThemeProvider>
    )
    .toJSON();

  expect(aayItemComponent).toMatchSnapshot();
});
