import React from "react";
import ApplicationRoutes from "./config/ApplicationRoutes";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "./config/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApplicationRoutes />
    </ThemeProvider>
  );
}

export default App;
