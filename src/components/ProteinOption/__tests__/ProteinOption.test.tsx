import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import ProteinOption from "../";
import { theme } from "../../../config";

it("renders ProteinOption correctly", () => {
  const proteinOptionComponent = renderer
    .create(
      <ThemeProvider theme={theme}>
        <ProteinOption text="" icon="" onClick={() => {}} />
      </ThemeProvider>
    )
    .toJSON();

  expect(proteinOptionComponent).toMatchSnapshot();
});
