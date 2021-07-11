import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import HeaderItem from "../";
import { theme } from "../../../config";

it("renders HeaderItem correctly", () => {
  const headerItemComponent = renderer
    .create(
      <ThemeProvider theme={theme}>
        <HeaderItem titleHederItem="" selectedHederItem />
      </ThemeProvider>
    )
    .toJSON();

  expect(headerItemComponent).toMatchSnapshot();
});
