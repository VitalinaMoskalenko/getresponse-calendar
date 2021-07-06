import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./config";
import Home from "./pages/Home";
import "./config/translations/i18n";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
