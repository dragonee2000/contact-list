import React, { useState, useEffect } from "react";

// MUI imports
import {
  CssBaseline,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material";

// Routes
import Routes from "./routes";

// custom theme
import themes from "themes";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes()}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
